package com.intellifactory.android;

import android.bluetooth.BluetoothAdapter;
import android.util.Log;
import android.webkit.ConsoleMessage;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.webkit.WebSettings;

/**
 * A view for running WebSharper Android applications
 * Wraps a WebKit View, exposing some Java functionality to JavaScript for 
 * WebSharper integration.
 */
final public class WebSharperView {

	final String url;
	
	/**
	 * Constructs a WebSharper View that opens index.html from the assets folder.
	 */
	public WebSharperView() {
		url = "file:///android_asset/index.html";
	}
	
	/**
	 * Constructs a WebSharper View with a given start URL.
	 */
	public WebSharperView(final String startUrl) {
		url = startUrl;
	}
	
	/**
	 * Formats a JavaScript console message.
	 */
	final private static String formatMessage(final ConsoleMessage cm) {
		return String.format("%s:%d: %s", cm.sourceId(), cm.lineNumber(), cm.message());
	}
	
	/**
	 * Creates a new WebView with the WebSharper application.
	 */
	final public WebView run(final AsyncActivity activity) {
		final WebView wv = new WebView(activity);
		final WebSettings settings = wv.getSettings();
		final String TAG = "JavaScriptConsole";
		settings.setJavaScriptEnabled(true);
		settings.setDomStorageEnabled(true);
		settings.setGeolocationEnabled(true);
		wv.setWebChromeClient(new WebChromeClient() {
			public boolean onConsoleMessage(final ConsoleMessage cm) {
				final String msg = formatMessage(cm);
				switch (cm.messageLevel()) {
				case DEBUG:
					Log.d(TAG, msg);
					break;
				case ERROR:
					Log.e(TAG, msg);
					break;
				case LOG:
					Log.i(TAG, msg);
					break;
				case TIP:
					Log.v(TAG, msg);
					break;
				case WARNING:
					Log.w(TAG, msg);
					break;
				}
				return true;
			}
		});
		wv.addJavascriptInterface(new WebSharperBridge(activity, wv), "AndroidWebSharperBridge");		
		final BluetoothAdapter bt = BluetoothAdapter.getDefaultAdapter();
		if (bt != null) {
			wv.addJavascriptInterface(new BluetoothBridge(bt, activity, wv), "AndroidWebSharperBluetoothBridge");
		}
		wv.loadUrl(url);
		return wv;
	}	
	
}
