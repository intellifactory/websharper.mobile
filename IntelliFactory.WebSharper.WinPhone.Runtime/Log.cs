﻿// WebSharper.Mobile - support for building mobile WebSharper apps
// Copyright (c) 2013 IntelliFactory
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

using System;
using System.Diagnostics;
using System.IO;
using System.IO.IsolatedStorage;

namespace IntelliFactory.WebSharper.WinPhone.Runtime
{
    /// <summary>
    /// Provides facilities for exception and message tracing used by
    /// WebSharper Windows Phone integration components.
    /// Everything is logged to "error.log" file in isolated storage,
    /// accessible with IsolatedStorageExplorerTool.  You can also subscribe
    /// to trace events.
    /// </summary>
    public static class Log
    {
        private static Object syncRoot = new Object();

        /// <summary>
        /// The general tracing function.
        /// </summary>
        public static void Trace(Priority priority, String category, String format, params Object[] args)
        {
            Trace(priority, category, null, format, args);
        }

        /// <summary>
        /// The most general tracing function including an exception.
        /// </summary>
        public static void Trace(Priority priority, String category, Exception e, String format, params Object[] args)
        {
            OnMessageSent(new MessageSentEventArgs()
            {
                Priority = priority,
                Category = category,
                Exception = e,
                Text = format == null ? null : String.Format(format, args)
            });
        }

        /// <summary>
        /// Traces an exception with Priority.Error.
        /// </summary>
        public static void TraceException(String category, Exception e)
        {
            Trace(Priority.Error, category, e, null);
        }

        /// <summary>
        /// Traces a Priority.Info message.
        /// </summary>
        public static void TraceInfo(String category, String format, params Object[] args)
        {
            Trace(Priority.Info, category, format, args);
        }

        /// <summary>
        /// Traces a Priority.Warning message.
        /// </summary>
        public static void TraceWarning(String category, String format, params Object[] args)
        {
            Trace(Priority.Warn, category, format, args);
        }

        /// <summary>
        /// Traces a Priority.Debug message in Debug mode, gets compiled out otherwise.
        /// </summary>
        [ConditionalAttribute("DEBUG")]
        public static void TraceDebug(String category, String format, params Object[] args)
        {
            Trace(Priority.Debug, category, format, args);
        }

        /// <summary>
        /// Represents message prioirty.
        /// </summary>
        public enum Priority {
            /// <summary>
            /// Debug-level message, gets compiled out unless in Debug mode.
            /// </summary>
            Debug,
            
            /// <summary>
            /// Info-level message, the default for tracing.
            /// </summary>
            Info,

            /// <summary>
            /// A warning.
            /// </summary>
            Warn,

            /// <summary>
            /// An error, typically an exception thrown.
            /// </summary>
            Error
        }

        private static void LogToIsolatedStorage(string text)
        {
            lock (syncRoot)
            {
                using (var file = IsolatedStorageFile.GetUserStoreForApplication())
                {
                    using (var writer = new StreamWriter(file.OpenFile("errors.log", FileMode.Append)))
                    {
                        writer.WriteLine(DateTimeOffset.Now);
                        writer.WriteLine(text);
                        writer.WriteLine();
                        writer.WriteLine();
                    }
                }
            }
        }

        #region MessageSent

        private static void OnMessageSent(MessageSentEventArgs args)
        {
            LogToIsolatedStorage(args.ToString());
            var handler = messageSent;
            if (handler != null)
            {
                handler(null, args);
            }
        }

        private static EventHandler<MessageSentEventArgs> messageSent;

        /// <summary>
        /// Raised on every message that is being logged.
        /// </summary>
        public static event EventHandler<MessageSentEventArgs> MessageSent
        {
            add
            {
                lock (syncRoot)
                {
                    messageSent += value;
                }
            }
            remove
            {
                lock (syncRoot)
                {
                    messageSent -= value;
                }
            }
        }

        /// <summary>
        /// Represents a message being logged.
        /// </summary>
        public sealed class MessageSentEventArgs : EventArgs
        {
            /// <summary>
            /// Describes the category, such as the originating class name.
            /// </summary>
            public string Category { get; internal set; }

            /// <summary>
            /// The raised exception, or null.
            /// </summary>
            public Exception Exception { get; internal set; }

            /// <summary>
            /// The message priority.
            /// </summary>
            public Priority Priority { get; internal set; }

            /// <summary>
            /// The message text, or null.
            /// </summary>
            public string Text { get; internal set; }

            /// <summary>
            /// Converts to a readable representation.
            /// </summary>
            public override string ToString()
            {
                using (var w = new StringWriter())
                {
                    w.Write("[{0}]", Priority);
                    if (Category == null)
                    {
                        w.Write(": ");
                    }
                    else
                    {
                        w.Write(" {0}:", Category);
                    }
                    if (Text == null)
                    {
                        w.WriteLine();
                    }
                    else
                    {
                        w.Write(' ');
                        w.WriteLine(Text);
                    }
                    if (Exception != null)
                    {
                        w.WriteLine(Exception);
                    }
                    return w.ToString();
                }
            }
        }
        #endregion
    }
}
