(function()
{
 var global=this;
 var Append,ArrayModule,Attr,Base,BaseFormlet,Body,CheckboxControl,Choose,Class,Controls,Core,CssConstants,Data,Default,Dictionary_2,Do,ElementButton,ElementStore_1,Enhance,Events,FSharpEvent_1,FSharpList_1,FormButtonConfiguration,FormContainerConfiguration,FormRowConfiguration,Form_2,Formlet,Formlet_1,Formlet_2,InTable,InputButton,InputControl,InputField,InputTextClass,LabelConfiguration,Layout,LiftResult,ManyConfiguration,Map,MapBody,MapElement,MapIndexed,MapOption,MapResult,Map_1,Maybe,NewElementStore,NewFail,NewRecord,NewSuccess,NewUnion,Of,OfArray,OfElement,OfSeq,OfSeq_1,OnAfterRender,Padding,Padding_1,PropagateRenderFrom,RX,RadioButtonGroupControl,Reduce,Result_1,Return,SelectControl,SeqModule,State_1,Tags,TextAreaControl,Tree,TryPick,Tupled,Utils,UtilsProvider,ValidationFrameConfiguration,ValidationIconConfiguration,WithLabel,WithLabel_1,WithLayout,__10,__11,__12,__13,__14,__5,__52,__53,__54,__55,__56,__57,__58,__59,__6,__60,__61,__62,__63,__64,__65,__66,__67,__68,__69,get_Default,get_Default_1,op_LessMultiplyGreater,op_MinusLess;
 IntelliFactory.WebSharper.Runtime.Declare({IntelliFactory:{WebSharper:{Formlet:{Utils:{},LayoutProvider:{},Layout:{Padding:{},LabelConfiguration:{},FormRowConfiguration:{}},FormletBuilder:{},Formlet:{},Enhance:{ValidationIconConfiguration:{},ValidationFrameConfiguration:{},Padding:{},ManyConfiguration:{},FormContainerConfiguration:{},FormButtonConfiguration:{}},"ElementStore`1":{},Data:{ValidatorProvidor:{},"Formlet`1":{}},CssConstants:{},Controls:{"State`1":{}},Body:{}}}}});
 Data=function()
 {
  return IntelliFactory.WebSharper.Formlet.Data;
 };
 Formlet=function()
 {
  return IntelliFactory.WebSharper.Formlet;
 };
 (function()
 {
  return IntelliFactory.WebSharper;
 });
 Class=function()
 {
  return IntelliFactory.WebSharper.Runtime.Class;
 };
 (function()
 {
  return IntelliFactory.WebSharper.Runtime;
 });
 __5=function()
 {
  var _this=this;
  var _,__1,c,matchValue;
  matchValue={$:0};
  if(matchValue.$==1)
   {
    c=matchValue.$0;
    _=[];
    __1=void c.apply(_this,_);
   }
  __1;
 };
 Result_1=function()
 {
  return IntelliFactory.Formlet.Base["Result`1"];
 };
 Base=function()
 {
  return IntelliFactory.Formlet.Base;
 };
 (function()
 {
  return IntelliFactory.Formlet;
 });
 __6=function(value)
 {
  return void value;
 };
 Of=function()
 {
  return IntelliFactory.WebSharper.Control.Observer.Of;
 };
 (function()
 {
  return IntelliFactory.WebSharper.Control.Observer;
 });
 (function()
 {
  return IntelliFactory.WebSharper.Control;
 });
 Layout=function()
 {
  return IntelliFactory.WebSharper.Formlet.Data.Layout;
 };
 NewRecord=function()
 {
  return IntelliFactory.WebSharper.Runtime.NewRecord;
 };
 Formlet_1=function()
 {
  return IntelliFactory.WebSharper.Formlet.Data["Formlet`1"];
 };
 Form_2=function()
 {
  return IntelliFactory.Formlet.Base["Form`2"];
 };
 Controls=function()
 {
  return IntelliFactory.WebSharper.Formlet.Controls;
 };
 __10=function(x)
 {
  var _,__1,__2;
  _=IntelliFactory.WebSharper.Formlet.Data.BaseFormlet;
  __2=_.Return(x);
  __1=function(formlet)
  {
   return IntelliFactory.WebSharper.Formlet.Data.OfIFormlet(formlet);
  };
  return __1(__2);
 };
 BaseFormlet=function()
 {
  return IntelliFactory.WebSharper.Formlet.Data.BaseFormlet;
 };
 __12=function(formlet)
 {
  return IntelliFactory.WebSharper.Formlet.Data.OfIFormlet(formlet);
 };
 (function()
 {
  return IntelliFactory.WebSharper.Formlet.Data.OfIFormlet;
 });
 __11=function(formlet,f)
 {
  var _,__1,__2,__3,__4,arg10;
  arg10=function(x)
  {
   return f(x);
  };
  _=IntelliFactory.WebSharper.Formlet.Data.BaseFormlet;
  __2=_.Bind(formlet,arg10);
  __1=function(f2)
  {
   return IntelliFactory.WebSharper.Formlet.Data.PropagateRenderFrom(formlet,f2);
  };
  __4=__1(__2);
  __3=function(formlet_1)
  {
   return IntelliFactory.WebSharper.Formlet.Data.OfIFormlet(formlet_1);
  };
  return __3(__4);
 };
 PropagateRenderFrom=function()
 {
  return IntelliFactory.WebSharper.Formlet.Data.PropagateRenderFrom;
 };
 op_MinusLess=function()
 {
  return IntelliFactory.WebSharper.Html.Operators.op_MinusLess;
 };
 (function()
 {
  return IntelliFactory.WebSharper.Html.Operators;
 });
 (function()
 {
  return IntelliFactory.WebSharper.Html;
 });
 OfArray=function()
 {
  return IntelliFactory.WebSharper.Core.ListModule.OfArray;
 };
 (function()
 {
  return IntelliFactory.WebSharper.Core.ListModule;
 });
 Core=function()
 {
  return IntelliFactory.WebSharper.Core;
 };
 Attr=function()
 {
  return IntelliFactory.WebSharper.Html.Implementation.Attr;
 };
 (function()
 {
  return IntelliFactory.WebSharper.Html.Implementation;
 });
 Tags=function()
 {
  return IntelliFactory.WebSharper.Html.Implementation.Tags;
 };
 Maybe=function()
 {
  return IntelliFactory.WebSharper.Formlet.Utils.Maybe;
 };
 Utils=function()
 {
  return IntelliFactory.WebSharper.Formlet.Utils;
 };
 Padding=function()
 {
  return IntelliFactory.WebSharper.Formlet.Layout.Padding;
 };
 (function()
 {
  return IntelliFactory.WebSharper.Formlet.Layout;
 });
 __13=function(x)
 {
  return x;
 };
 __14=function(o)
 {
  return IntelliFactory.WebSharper.Formlet.Utils.Maybe(0,function(x)
  {
   return x;
  },o);
 };
 OfSeq=function()
 {
  return IntelliFactory.WebSharper.Core.ListModule.OfSeq;
 };
 Map=function()
 {
  return IntelliFactory.WebSharper.Core.SeqModule.Map;
 };
 SeqModule=function()
 {
  return IntelliFactory.WebSharper.Core.SeqModule;
 };
 Tupled=function()
 {
  return IntelliFactory.WebSharper.Runtime.Tupled;
 };
 Reduce=function()
 {
  return IntelliFactory.WebSharper.Core.SeqModule.Reduce;
 };
 NewUnion=function()
 {
  return IntelliFactory.WebSharper.Runtime.NewUnion;
 };
 FSharpList_1=function()
 {
  return IntelliFactory.WebSharper.Core["FSharpList`1"];
 };
 Append=function()
 {
  return IntelliFactory.WebSharper.Core.SeqModule.Append;
 };
 LabelConfiguration=function()
 {
  return IntelliFactory.WebSharper.Formlet.Layout.LabelConfiguration;
 };
 InTable=function()
 {
  return IntelliFactory.WebSharper.Formlet.Utils.InTable;
 };
 NewElementStore=function()
 {
  return IntelliFactory.WebSharper.Formlet["ElementStore`1"].NewElementStore;
 };
 ElementStore_1=function()
 {
  return IntelliFactory.WebSharper.Formlet["ElementStore`1"];
 };
 get_Default=function()
 {
  return IntelliFactory.WebSharper.Formlet.Layout.FormRowConfiguration.get_Default;
 };
 FormRowConfiguration=function()
 {
  return IntelliFactory.WebSharper.Formlet.Layout.FormRowConfiguration;
 };
 Dictionary_2=function()
 {
  return IntelliFactory.WebSharper.Collections["Dictionary`2"];
 };
 (function()
 {
  return IntelliFactory.WebSharper.Collections;
 });
 __52=function()
 {
  return{Left:{$:0},Right:{$:0},Top:{$:0},Bottom:{$:0}};
 };
 State_1=function()
 {
  return IntelliFactory.WebSharper.Formlet.Controls["State`1"];
 };
 FSharpEvent_1=function()
 {
  return IntelliFactory.WebSharper.Control["FSharpEvent`1"];
 };
 ManyConfiguration=function()
 {
  return IntelliFactory.WebSharper.Formlet.Enhance.ManyConfiguration;
 };
 Enhance=function()
 {
  return IntelliFactory.WebSharper.Formlet.Enhance;
 };
 FormContainerConfiguration=function()
 {
  return IntelliFactory.WebSharper.Formlet.Enhance.FormContainerConfiguration;
 };
 Padding_1=function()
 {
  return IntelliFactory.WebSharper.Formlet.Enhance.Padding;
 };
 ValidationFrameConfiguration=function()
 {
  return IntelliFactory.WebSharper.Formlet.Enhance.ValidationFrameConfiguration;
 };
 ValidationIconConfiguration=function()
 {
  return IntelliFactory.WebSharper.Formlet.Enhance.ValidationIconConfiguration;
 };
 FormButtonConfiguration=function()
 {
  return IntelliFactory.WebSharper.Formlet.Enhance.FormButtonConfiguration;
 };
 Body=function()
 {
  return IntelliFactory.WebSharper.Formlet.Body;
 };
 CssConstants=function()
 {
  return IntelliFactory.WebSharper.Formlet.CssConstants;
 };
 UtilsProvider=function()
 {
  return IntelliFactory.WebSharper.Formlet.Data.UtilsProvider;
 };
 Tree=function()
 {
  return IntelliFactory.Formlet.Base.Tree;
 };
 __53=function(arg00)
 {
  var _;
  _=IntelliFactory.WebSharper.Formlet.Data.RX;
  return _.Return(arg00);
 };
 RX=function()
 {
  return IntelliFactory.WebSharper.Formlet.Data.RX;
 };
 Default=function()
 {
  return IntelliFactory.Reactive.Reactive.Default;
 };
 (function()
 {
  return IntelliFactory.Reactive.Reactive;
 });
 (function()
 {
  return IntelliFactory.Reactive;
 });
 Formlet_2=function()
 {
  return IntelliFactory.WebSharper.Formlet.Formlet;
 };
 __55=function(formlet)
 {
  return IntelliFactory.WebSharper.Formlet.Formlet.Map(function(f)
  {
   return f;
  },formlet);
 };
 Map_1=function()
 {
  return IntelliFactory.WebSharper.Formlet.Formlet.Map;
 };
 __56=function(f)
 {
  return IntelliFactory.WebSharper.Formlet.Data.MkFormlet(f);
 };
 (function()
 {
  return IntelliFactory.WebSharper.Formlet.Data.MkFormlet;
 });
 __57=function(formlet)
 {
  return IntelliFactory.WebSharper.Formlet.Formlet.LiftResult(formlet);
 };
 LiftResult=function()
 {
  return IntelliFactory.WebSharper.Formlet.Formlet.LiftResult;
 };
 __58=function(formlet)
 {
  return IntelliFactory.WebSharper.Formlet.Formlet.InitWithFailure(formlet);
 };
 (function()
 {
  return IntelliFactory.WebSharper.Formlet.Formlet.InitWithFailure;
 });
 __59=function(fs)
 {
  return IntelliFactory.WebSharper.Formlet.Formlet.Sequence(fs);
 };
 (function()
 {
  return IntelliFactory.WebSharper.Formlet.Formlet.Sequence;
 });
 Choose=function()
 {
  return IntelliFactory.WebSharper.Core.SeqModule.Choose;
 };
 __60=function(tupledArg)
 {
  return tupledArg[1];
 };
 OfSeq_1=function()
 {
  return IntelliFactory.WebSharper.Core.ArrayModule.OfSeq;
 };
 ArrayModule=function()
 {
  return IntelliFactory.WebSharper.Core.ArrayModule;
 };
 TryPick=function()
 {
  return IntelliFactory.WebSharper.Core.SeqModule.TryPick;
 };
 NewFail=function()
 {
  return IntelliFactory.WebSharper.Formlet.Controls["State`1"].NewFail;
 };
 Events=function()
 {
  return IntelliFactory.WebSharper.Html.EventsPervasives.Events;
 };
 (function()
 {
  return IntelliFactory.WebSharper.Html.EventsPervasives;
 });
 ElementButton=function()
 {
  return IntelliFactory.WebSharper.Formlet.Controls.ElementButton;
 };
 InputField=function()
 {
  return IntelliFactory.WebSharper.Formlet.Controls.InputField;
 };
 InputTextClass=function()
 {
  return IntelliFactory.WebSharper.Formlet.CssConstants.InputTextClass;
 };
 InputControl=function()
 {
  return IntelliFactory.WebSharper.Formlet.Controls.InputControl;
 };
 RadioButtonGroupControl=function()
 {
  return IntelliFactory.WebSharper.Formlet.Controls.RadioButtonGroupControl;
 };
 __61=function(f)
 {
  return IntelliFactory.WebSharper.Formlet.Formlet.New(f);
 };
 (function()
 {
  return IntelliFactory.WebSharper.Formlet.Formlet.New;
 });
 MapIndexed=function()
 {
  return IntelliFactory.WebSharper.Core.SeqModule.MapIndexed;
 };
 NewSuccess=function()
 {
  return IntelliFactory.WebSharper.Formlet.Controls["State`1"].NewSuccess;
 };
 CheckboxControl=function()
 {
  return IntelliFactory.WebSharper.Formlet.Controls.CheckboxControl;
 };
 WithLabel=function()
 {
  return IntelliFactory.WebSharper.Formlet.Formlet.WithLabel;
 };
 __62=function(arg0)
 {
  return{$:0,$0:arg0};
 };
 TextAreaControl=function()
 {
  return IntelliFactory.WebSharper.Formlet.Controls.TextAreaControl;
 };
 SelectControl=function()
 {
  return IntelliFactory.WebSharper.Formlet.Controls.SelectControl;
 };
 OnAfterRender=function()
 {
  return IntelliFactory.WebSharper.Html.Operators.OnAfterRender;
 };
 __63=function(formlet)
 {
  return IntelliFactory.WebSharper.Formlet.Formlet.Map(function(value)
  {
   return void value;
  },formlet);
 };
 __64=function(formlet)
 {
  var _;
  _=IntelliFactory.WebSharper.Formlet.Data.Layout;
  return IntelliFactory.WebSharper.Formlet.Formlet.WithLayout(_.get_Horizontal(),formlet);
 };
 WithLayout=function()
 {
  return IntelliFactory.WebSharper.Formlet.Formlet.WithLayout;
 };
 __65=function(formlet)
 {
  return IntelliFactory.WebSharper.Formlet.Formlet.WithLayoutOrDefault(formlet);
 };
 (function()
 {
  return IntelliFactory.WebSharper.Formlet.Formlet.WithLayoutOrDefault;
 });
 __66=function(formlet)
 {
  return IntelliFactory.WebSharper.Formlet.Formlet.ApplyLayout(formlet);
 };
 (function()
 {
  return IntelliFactory.WebSharper.Formlet.Formlet.ApplyLayout;
 });
 Do=function()
 {
  return IntelliFactory.WebSharper.Formlet.Formlet.Do;
 };
 Return=function()
 {
  return IntelliFactory.WebSharper.Formlet.Formlet.Return;
 };
 MapResult=function()
 {
  return IntelliFactory.WebSharper.Formlet.Formlet.MapResult;
 };
 MapBody=function()
 {
  return IntelliFactory.WebSharper.Formlet.Formlet.MapBody;
 };
 MapElement=function()
 {
  return IntelliFactory.WebSharper.Formlet.Formlet.MapElement;
 };
 MapOption=function()
 {
  return IntelliFactory.WebSharper.Formlet.Utils.MapOption;
 };
 __67=function(value)
 {
  return IntelliFactory.WebSharper.Formlet.Utils.MapOption(function(v)
  {
   return v.toString()+"px";
  },value);
 };
 (function(v)
 {
  return v.toString()+"px";
 });
 WithLabel_1=function()
 {
  return IntelliFactory.WebSharper.Formlet.Enhance.WithLabel;
 };
 __68=function(formlet)
 {
  return IntelliFactory.WebSharper.Formlet.Formlet.MapResult(function(arg00)
  {
   return IntelliFactory.Formlet.Base["Result`1"].Join(arg00);
  },formlet);
 };
 (function(arg00)
 {
  return IntelliFactory.Formlet.Base["Result`1"].Join(arg00);
 });
 (function()
 {
  return IntelliFactory.Formlet.Base["Result`1"].Join;
 });
 OfElement=function()
 {
  return IntelliFactory.WebSharper.Formlet.Formlet.OfElement;
 };
 get_Default_1=function()
 {
  return IntelliFactory.WebSharper.Formlet.Enhance.FormButtonConfiguration.get_Default;
 };
 InputButton=function()
 {
  return IntelliFactory.WebSharper.Formlet.Enhance.InputButton;
 };
 __69=function(formlet)
 {
  return IntelliFactory.WebSharper.Formlet.Formlet.WithNotificationChannel(formlet);
 };
 (function()
 {
  return IntelliFactory.WebSharper.Formlet.Formlet.WithNotificationChannel;
 });
 op_LessMultiplyGreater=function()
 {
  return IntelliFactory.WebSharper.Formlet.Data.op_LessMultiplyGreater;
 };
 (Data()).ValidatorProvidor=(Class())(__5,null,{Matches:function(regex,text)
 {
  return text.match(new RegExp(regex));
 }});
 (Data())["Formlet`1"]=(Class())(null,null,{Run:function(f)
 {
  var _this=this;
  var _,__2,__3,__4,__7,__8,__9,el,form,formlet,matchValue,matchValue_1;
  matchValue=_this.ElementInternal;
  if(matchValue.$==0)
   {
    _=_this.FormletBase;
    formlet=_.ApplyLayout(_this);
    form=formlet.Build();
    __2=form.State;
    __3=function(res)
    {
     var __1;
     __1=(Result_1()).Map(f,res);
     return __6(__1);
    };
    __4=__2.Subscribe((Of())(__3));
    __6(__4);
    matchValue_1=(formlet.get_Layout()).Apply(form.Body);
    if(matchValue_1.$==0)
     {
      __7=Layout();
      __8=((__7.get_Vertical()).Apply(form.Body)).$0[0].Element;
     }
    else
     {
      __8=matchValue_1.$0[0].Element;
     }
    el=__8;
    _this.ElementInternal={$:1,$0:el};
    __9=el;
   }
  else
   {
    __9=matchValue.$0;
   }
  return __9;
 },Build:function()
 {
  var _this=this;
  return _this.BuildInternal(undefined);
 },get_Layout:function()
 {
  var _this=this;
  return _this.LayoutInternal;
 },MapResult:function(f)
 {
  var _this=this;
  return(NewRecord())(Formlet_1(),{BuildInternal:function()
  {
   var form,objectArg;
   form=_this.BuildInternal(undefined);
   objectArg=_this.Utils.Reactive;
   return(NewRecord())(Form_2(),{Body:form.Body,Dispose:form.Dispose,Notify:form.Notify,State:(function(arg00)
   {
    return function(arg10)
    {
     return objectArg.Select(arg00,arg10);
    };
   }(form.State))(function(x)
   {
    return f(x);
   })});
  },LayoutInternal:_this.LayoutInternal,ElementInternal:{$:0},FormletBase:_this.FormletBase,Utils:_this.Utils});
 },get_Body:function()
 {
  var _this=this;
  var _;
  _=_this.Run(__6);
  return _.get_Body();
 },Render:function()
 {
  var _this=this;
  var _;
  _=_this.Run(__6);
  return _.Render();
 }});
 (Controls())["State`1"]=(Class())(null,null,{Trigger:function(v)
 {
  var _this=this;
  var _,__1;
  _=_this.Event;
  __1=_.event;
  return __1.Trigger(v);
 },Subscribe:function(o)
 {
  var _this=this;
  var _,__1;
  o.OnNext(_this.Initial);
  _=_this.Event.event;
  __1=function(v)
  {
   return o.OnNext(v);
  };
  return _.Subscribe((Of())(__1));
 }});
 (Formlet()).FormletBuilder=(Class())(__5,null,{Return:__10,Bind:__11,Delay:function(f)
 {
  var _,__1;
  _=BaseFormlet();
  __1=_.Delay(function(x)
  {
   return f(x);
  });
  return __12(__1);
 },ReturnFrom:function(f)
 {
  return __12(f);
 }});
 (Formlet()).LayoutProvider=(Class())(function(LayoutUtils)
 {
  var _this=this;
  var _,__1,c,matchValue;
  matchValue={$:0};
  if(matchValue.$==1)
   {
    c=matchValue.$0;
    _=[];
    __1=void c.apply(_this,_);
   }
  __1;
  _this.LayoutUtils=LayoutUtils;
 },null,{HorizontalAlignElem:function(align,el)
 {
  var _,__1,__2,__3,_float;
  _float=align.$==0?"left":"right";
  _=Attr();
  __1="float:"+_float+";";
  __3=(OfArray())([_.NewAttr("style",__1)]);
  __2=Tags();
  return(op_MinusLess())(__2.Div(__3),(OfArray())([el]));
 },VerticalAlignedTD:function(valign,elem)
 {
  var _,__1,__2,cell,objectArg,valign_1;
  if(valign.$==1)
   {
    _="middle";
   }
  else
   {
    _=valign.$==2?"bottom":"top";
   }
  valign_1=_;
  __2=(OfArray())([elem]);
  __1=Tags();
  cell=__1.NewTag("td",__2);
  objectArg=cell["HtmlProvider@22"];
  (((function(arg00)
  {
   return function(arg10)
   {
    return function(arg20)
    {
     return objectArg.SetCss(arg00,arg10,arg20);
    };
   };
  }(cell.Body))("vertical-align"))(valign_1));
  return cell;
 },MakeRow:function(rowConfig,rowIndex,body)
 {
  var _this=this;
  var _,__1,__2,__27,__28,__29,__3,__30,__31,__32,__33,__34,__35,__36,__37,__38,__39,__4,__40,__41,__42,__43,__44,__45,__46,__47,__48,__49,__50,__51,__7,cells,elem_1,label,labelConf,labelGen,makeCell,matchValue,matchValue_1,matchValue_2,padding,paddingBottom,paddingLeft,paddingRight,paddingTop,rowClass,rowColorStyleProp,rowStyle,rowStyleProp;
  __1=rowConfig.Padding;
  _=function(o)
  {
   return(Maybe())((Padding()).get_Default(),__13,o);
  };
  padding=_(__1);
  __2=padding.Left;
  paddingLeft=__14(__2);
  __3=padding.Top;
  paddingTop=__14(__3);
  __4=padding.Right;
  paddingRight=__14(__4);
  __7=padding.Bottom;
  paddingBottom=__14(__7);
  makeCell=function(l)
  {
   return function(t)
   {
    return function(r)
    {
     return function(b)
     {
      return function(csp)
      {
       return function(valign_1)
       {
        return function(elem)
        {
         var __15,__16,__18,__19,__20,__21,__22,__23,__24,__25,__26,__8,__9,colSpan,paddingStyle,style,valignStyle;
         __9=(OfArray())([["padding-left: ",l],["padding-top: ",t],["padding-right: ",r],["padding-bottom: ",b]]);
         __8=function(list)
         {
          return(OfSeq())((Map())((Tupled())(function(tupledArg)
          {
           var k,v;
           k=tupledArg[0];
           v=tupledArg[1];
           return k+v.toString()+"px;";
          }),list));
         };
         __16=__8(__9);
         __15=function(source)
         {
          return(Reduce())(function(x)
          {
           return function(y)
           {
            return x+y;
           };
          },source);
         };
         paddingStyle=__15(__16);
         __18=function(o)
         {
          return(Maybe())("",function(valign)
          {
           var __17;
           if(valign.$==1)
            {
             __17="middle";
            }
           else
            {
             __17=valign.$==2?"bottom":"top";
            }
           return"vertical-align: "+__17+";";
          },o);
         };
         valignStyle=__18(valign_1);
         __19=Attr();
         __20=paddingStyle+";"+valignStyle;
         style=__19.NewAttr("style",__20);
         if(csp)
          {
           __21=Attr();
           __22=(OfArray())([__21.NewAttr("colspan","2")]);
          }
         else
          {
           __22=(NewUnion())(FSharpList_1(),0);
          }
         colSpan=__22;
         __25=function(x)
         {
          var __17;
          __17=Tags();
          return __17.NewTag("td",x);
         };
         __23=(NewUnion())(FSharpList_1(),1,style,colSpan);
         __24=(OfArray())([elem]);
         __26=(OfSeq())((Append())(__23,__24));
         return __25(__26);
        };
       };
      };
     };
    };
   };
  };
  elem_1=body.Element;
  matchValue=body.Label;
  if(matchValue.$==1)
   {
    labelGen=matchValue.$0;
    __28=rowConfig.LabelConfiguration;
    __27=function(o)
    {
     return(Maybe())((LabelConfiguration()).get_Default(),__13,o);
    };
    labelConf=__27(__28);
    __30=labelGen(undefined);
    __29=function(arg10)
    {
     return _this.HorizontalAlignElem(labelConf.Align,arg10);
    };
    label=__29(__30);
    matchValue_1=labelConf.Placement;
    if(matchValue_1.$==3)
     {
      __32=(InTable())((OfArray())([(OfArray())([elem_1]),(OfArray())([label])]));
      __31=(((((makeCell(paddingLeft))(paddingTop))(paddingRight))(paddingBottom))(true))({$:0});
      __37=(OfArray())([__31(__32)]);
     }
    else
     {
      if(matchValue_1.$==0)
       {
        __36=(OfArray())([((((((makeCell(paddingLeft))(paddingTop))(0))(paddingBottom))(false))({$:1,$0:labelConf.VerticalAlign}))(label),((((((makeCell(0))(paddingTop))(paddingRight))(paddingBottom))(false))({$:0}))(elem_1)]);
       }
      else
       {
        if(matchValue_1.$==1)
         {
          __35=(OfArray())([((((((makeCell(paddingLeft))(paddingTop))(0))(paddingBottom))(false))({$:1,$0:labelConf.VerticalAlign}))(elem_1),((((((makeCell(0))(paddingTop))(paddingRight))(paddingBottom))(false))({$:0}))(label)]);
         }
        else
         {
          __34=(InTable())((OfArray())([(OfArray())([label]),(OfArray())([elem_1])]));
          __33=(((((makeCell(paddingLeft))(paddingTop))(paddingRight))(paddingBottom))(true))({$:0});
          __35=(OfArray())([__33(__34)]);
         }
        __36=__35;
       }
      __37=__36;
     }
    __38=__37;
   }
  else
   {
    __38=(OfArray())([((((((makeCell(paddingLeft))(paddingTop))(paddingRight))(paddingBottom))(true))({$:0}))(elem_1)]);
   }
  cells=__38;
  __40=rowConfig.Class;
  __39=function(o)
  {
   return(Maybe())((NewUnion())(FSharpList_1(),0),function(classGen)
   {
    var __15,__9;
    __9=function(arg00)
    {
     var __8;
     __8=Attr();
     return __8.NewAttr("class",arg00);
    };
    __15=classGen(rowIndex);
    return(OfArray())([__9(__15)]);
   },o);
  };
  rowClass=__39(__40);
  __42=rowConfig.Color;
  __41=function(o)
  {
   return(Maybe())((NewUnion())(FSharpList_1(),0),function(colGen)
   {
    var col;
    col=colGen(rowIndex);
    return(OfArray())(["background-color: "+col]);
   },o);
  };
  rowColorStyleProp=__41(__42);
  __44=rowConfig.Style;
  __43=function(o)
  {
   return(Maybe())((NewUnion())(FSharpList_1(),0),function(styleGen)
   {
    return(OfArray())([styleGen(rowIndex)]);
   },o);
  };
  rowStyleProp=__43(__44);
  matchValue_2=(OfSeq())((Append())(rowColorStyleProp,rowStyleProp));
  if(matchValue_2.$==0)
   {
    __47=(NewUnion())(FSharpList_1(),0);
   }
  else
   {
    __46=(Reduce())(function(x)
    {
     return function(y)
     {
      return x+";"+y;
     };
    },matchValue_2);
    __45=function(arg00)
    {
     var __8;
     __8=Attr();
     return __8.NewAttr("style",arg00);
    };
    __47=(OfArray())([__45(__46)]);
   }
  rowStyle=__47;
  __50=function(x)
  {
   var __8;
   __8=Tags();
   return __8.NewTag("tr",x);
  };
  __48=(OfSeq())((Append())(rowStyle,cells));
  __49=(OfSeq())((Append())(rowStyle,__48));
  __51=(OfSeq())((Append())(rowClass,__49));
  return __50(__51);
 },MakeLayout:function(lm)
 {
  var _this=this;
  var __2,__3,objectArg;
  objectArg=_this.LayoutUtils;
  __2=function(arg00)
  {
   return objectArg.New(arg00);
  };
  __3=function()
  {
   var insert,lm_1,remove,store;
   lm_1=lm(undefined);
   store=(NewElementStore())();
   insert=function(ix)
   {
    return function(bd)
    {
     var _,elemId,newElems;
     _=bd.Element;
     elemId=_.get_Id();
     newElems=(lm_1.Insert(ix))(bd);
     return store.RegisterElement(elemId,function()
     {
      var _1,__1,e,enumerator,x;
      enumerator=newElems.GetEnumerator();
      try
      {
       while(enumerator.MoveNext())
        {
         e=enumerator.get_Current();
         __1=e["HtmlProvider@22"];
         __1.Remove(e.Body);
        }
      }
      finally
      {
       enumerator.Dispose();
      }
      return _1;
     });
    };
   };
   remove=function(elems)
   {
    var _,_1,b,enumerator,x;
    enumerator=elems.GetEnumerator();
    try
    {
     while(enumerator.MoveNext())
      {
       b=enumerator.get_Current();
       _=b.Element;
       store.Remove(_.get_Id());
      }
    }
    finally
    {
     enumerator.Dispose();
    }
    return _1;
   };
   return{Body:{Element:lm_1.Panel,Label:{$:0}},SyncRoot:null,Insert:insert,Remove:remove};
  };
  return __2(__3);
 },RowLayout:function(rowConfig)
 {
  var _this=this;
  var __20,__21,objectArg;
  objectArg=_this.LayoutUtils;
  __20=function(arg00)
  {
   return objectArg.New(arg00);
  };
  __21=function()
  {
   var _,__1,__2,__3,container,insert,panel,remove,store;
   __1=(NewUnion())(FSharpList_1(),0);
   _=Tags();
   panel=_.NewTag("tbody",__1);
   __3=(OfArray())([panel]);
   __2=Tags();
   container=__2.NewTag("table",__3);
   store=(NewElementStore())();
   insert=function(rowIx)
   {
    return function(body)
    {
     var __17,__18,__19,__4,__7,elemId,index,inserted,jqPanel,row;
     __4=body.Element;
     elemId=__4.get_Id();
     row=_this.MakeRow(rowConfig,rowIx,body);
     __7=panel.Body;
     jqPanel=jQuery(__7);
     index={contents:0};
     inserted={contents:false};
     __17=jqPanel.children();
     __18=function()
     {
      var el=this;
      var __15,__16,__8,__9,jqRow;
      jqRow=jQuery(el);
      if(rowIx===index.contents)
       {
        __8=row.Body;
        __9=jQuery(__8);
        __9.insertBefore(jqRow);
        row.Render();
        __15=inserted.contents=true;
       }
      __15;
      __16=index.contents+1;
      return index.contents=__16;
     };
     __17.each(__18);
     if(!inserted.contents)
      {
       __19=panel.AppendI(row);
      }
     __19;
     return store.RegisterElement(elemId,function()
     {
      var __8;
      __8=row["HtmlProvider@22"];
      return __8.Remove(row.Body);
     });
    };
   };
   remove=function(elems)
   {
    var _1,__4,b,enumerator,x;
    enumerator=elems.GetEnumerator();
    try
    {
     while(enumerator.MoveNext())
      {
       b=enumerator.get_Current();
       __4=b.Element;
       store.Remove(__4.get_Id());
      }
    }
    finally
    {
     enumerator.Dispose();
    }
    return _1;
   };
   return{Body:{Element:container,Label:{$:0}},SyncRoot:null,Insert:insert,Remove:remove};
  };
  return __20(__21);
 },ColumnLayout:function(rowConfig)
 {
  var _this=this;
  var __28,__29,objectArg;
  objectArg=_this.LayoutUtils;
  __28=function(arg00)
  {
   return objectArg.New(arg00);
  };
  __29=function()
  {
   var _,__1,__2,__3,__4,__7,container,insert,remove,row,store;
   __1=(NewUnion())(FSharpList_1(),0);
   _=Tags();
   row=_.NewTag("tr",__1);
   __3=(OfArray())([row]);
   __2=Tags();
   __7=(OfArray())([__2.NewTag("tbody",__3)]);
   __4=Tags();
   container=__4.NewTag("table",__7);
   store=(NewElementStore())();
   insert=function(rowIx)
   {
    return function(body)
    {
     var __15,__16,__17,__18,__19,__20,__25,__26,__27,__8,__9,elemId,index,inserted,jqPanel,newCol;
     __8=body.Element;
     elemId=__8.get_Id();
     __15=(OfArray())([_this.MakeRow(rowConfig,rowIx,body)]);
     __9=Tags();
     __17=(OfArray())([__9.NewTag("tbody",__15)]);
     __16=Tags();
     __19=(OfArray())([__16.NewTag("table",__17)]);
     __18=Tags();
     newCol=__18.NewTag("td",__19);
     __20=row.Body;
     jqPanel=jQuery(__20);
     index={contents:0};
     inserted={contents:false};
     __25=jqPanel.children();
     __26=function()
     {
      var el=this;
      var __21,__22,__23,__24,jqCol;
      jqCol=jQuery(el);
      if(rowIx===index.contents)
       {
        __21=newCol.Body;
        __22=jQuery(__21);
        __22.insertBefore(jqCol);
        newCol.Render();
        __23=inserted.contents=true;
       }
      __23;
      __24=index.contents+1;
      return index.contents=__24;
     };
     __25.each(__26);
     if(!inserted.contents)
      {
       __27=row.AppendI(newCol);
      }
     __27;
     return store.RegisterElement(elemId,function()
     {
      var __21;
      __21=newCol["HtmlProvider@22"];
      return __21.Remove(newCol.Body);
     });
    };
   };
   remove=function(elems)
   {
    var _1,__8,b,enumerator,x;
    enumerator=elems.GetEnumerator();
    try
    {
     while(enumerator.MoveNext())
      {
       b=enumerator.get_Current();
       __8=b.Element;
       store.Remove(__8.get_Id());
      }
    }
    finally
    {
     enumerator.Dispose();
    }
    return _1;
   };
   return{Body:{Element:container,Label:{$:0}},SyncRoot:null,Insert:insert,Remove:remove};
  };
  return __28(__29);
 },get_Flowlet:function()
 {
  var _this=this;
  var lm;
  lm=function()
  {
   var _,__1,insert,panel;
   __1=(NewUnion())(FSharpList_1(),0);
   _=Tags();
   panel=_.Div(__1);
   insert=function()
   {
    return function(bd)
    {
     var __2,__3,__4,__7,__8,__9,label,nextScreen;
     if(bd.Label.$==1)
      {
       __4=bd.Label.$0(undefined);
      }
     else
      {
       __3=(NewUnion())(FSharpList_1(),0);
       __2=Tags();
       __4=__2.NewTag("span",__3);
      }
     label=__4;
     __8=(OfArray())([bd.Element]);
     __7=Tags();
     nextScreen=(InTable())((OfArray())([(OfArray())([label,__7.Div(__8)])]));
     __9=panel["HtmlProvider@22"];
     __9.Clear(panel.Body);
     panel.AppendI(nextScreen);
     return(OfArray())([nextScreen]);
    };
   };
   return{Insert:insert,Panel:panel};
  };
  return _this.MakeLayout(lm);
 },LabelLayout:function(lc)
 {
  var _this=this;
  var LabelConfiguration_1,inputRecord;
  inputRecord=(get_Default())();
  LabelConfiguration_1={$:1,$0:lc};
  return _this.RowLayout({Padding:inputRecord.Padding,Color:inputRecord.Color,Class:inputRecord.Class,Style:inputRecord.Style,LabelConfiguration:LabelConfiguration_1});
 },get_Vertical:function()
 {
  var _this=this;
  return _this.RowLayout((get_Default())());
 },get_Horizontal:function()
 {
  var _this=this;
  return _this.ColumnLayout((get_Default())());
 }});
 (Formlet())["ElementStore`1"]=(Class())(__5,null,{Init:function()
 {
  var _this=this;
  return _this.store=new(Dictionary_2())([],(Tupled())(function(tupledArg)
  {
   var a,b;
   a=tupledArg[0];
   b=tupledArg[1];
   return(Dictionary_2()).eq(a,b);
  }),function(obj)
  {
   return(Core()).Hashing.Hash(obj);
  });
 },RegisterElement:function(key,f)
 {
  var _this=this;
  var _,__1,__2,__3,__4;
  _=_this.store;
  __2=_.ContainsKey(key);
  __1=function(value)
  {
   return!value;
  };
  if(__1(__2))
   {
    __3=_this.store;
    __4=__3.set_Item(key,f);
   }
  return __4;
 },Remove:function(key)
 {
  var _this=this;
  var _,__1,__2,__3,__4;
  _=_this.store;
  if(_.ContainsKey(key))
   {
    __1=_this.store;
    (__1.get_Item(key))(undefined);
    __2=_this.store;
    __3=__2.Remove(key);
    __4=__6(__3);
   }
  return __4;
 }});
 (FormRowConfiguration()).get_Default=function()
 {
  return{Padding:{$:0},Color:{$:0},Class:{$:0},Style:{$:0},LabelConfiguration:{$:0}};
 };
 (LabelConfiguration()).get_Default=function()
 {
  return{Align:{$:0},VerticalAlign:{$:1},Placement:{$:0}};
 };
 (Padding()).get_Default=__52;
 (State_1()).NewFail=function()
 {
  return(NewRecord())(State_1(),{Initial:{$:1,$0:(NewUnion())(FSharpList_1(),0)},Event:new(FSharpEvent_1())()});
 };
 (State_1()).NewSuccess=function(v)
 {
  return(NewRecord())(State_1(),{Initial:{$:0,$0:v},Event:new(FSharpEvent_1())()});
 };
 (State_1()).FromResult=function(res)
 {
  return(NewRecord())(State_1(),{Initial:res,Event:new(FSharpEvent_1())()});
 };
 (ManyConfiguration()).get_Default=function()
 {
  return{AddIconClass:"addIcon",RemoveIconClass:"removeIcon"};
 };
 (FormContainerConfiguration()).get_Default=function()
 {
  var Description;
  Description={$:0};
  return{Header:{$:0},Padding:(Padding_1()).get_Default(),Description:Description,BackgroundColor:{$:0},BorderColor:{$:0},CssClass:{$:0},Style:{$:0}};
 };
 (Padding_1()).get_Default=__52;
 (ValidationFrameConfiguration()).get_Default=function()
 {
  return{ValidClass:{$:1,$0:"successFormlet"},ValidStyle:{$:0},ErrorClass:{$:1,$0:"errorFormlet"},ErrorStyle:{$:0}};
 };
 (ValidationIconConfiguration()).get_Default=function()
 {
  return{ValidIconClass:"validIcon",ErrorIconClass:"errorIcon"};
 };
 (FormButtonConfiguration()).get_Default=function()
 {
  return{Label:{$:0},Style:{$:0},Class:{$:0}};
 };
 (ElementStore_1()).NewElementStore=function()
 {
  var store;
  store=new(ElementStore_1())();
  store.Init();
  return store;
 };
 (Body()).New=function(el,l)
 {
  return{Element:el,Label:l};
 };
 (Utils()).InTable=function(rows)
 {
  var __4,__7,__8,__9,rs,tb;
  __4=function(list_1)
  {
   return(OfSeq())((Map())(function(cols)
   {
    var __2,__3,xs;
    __2=function(list)
    {
     return(OfSeq())((Map())(function(c)
     {
      var _,__1;
      __1=(OfArray())([c]);
      _=Tags();
      return _.NewTag("td",__1);
     },list));
    };
    xs=__2(cols);
    __3=Tags();
    return __3.NewTag("tr",xs);
   },list_1));
  };
  rs=__4(rows);
  __7=Tags();
  tb=__7.NewTag("tbody",rs);
  __9=(OfArray())([tb]);
  __8=Tags();
  return __8.NewTag("table",__9);
 };
 (Utils()).Maybe=function(d,f,o)
 {
  var _,x;
  if(o.$==0)
   {
    _=d;
   }
  else
   {
    x=o.$0;
    _=f(x);
   }
  return _;
 };
 (Utils()).MapOption=function(f,value)
 {
  var _,v;
  if(value.$==1)
   {
    v=value.$0;
    _={$:1,$0:f(v)};
   }
  else
   {
    _={$:0};
   }
  return _;
 };
 (CssConstants()).InputTextClass="inputText";
 (Data()).OfIFormlet=function(formlet)
 {
  var _,__1;
  __1=(NewRecord())(Formlet_1(),{BuildInternal:function()
  {
   return formlet.Build();
  },LayoutInternal:formlet.get_Layout(),ElementInternal:{$:0},FormletBase:BaseFormlet(),Utils:UtilsProvider()});
  _=function(f2)
  {
   return(PropagateRenderFrom())(formlet,f2);
  };
  return _(__1);
 };
 (Data()).MkFormlet=function(f)
 {
  var __3,__4,__7;
  __3=function(arg00)
  {
   var _;
   _=BaseFormlet();
   return _.New(arg00);
  };
  __4=function()
  {
   var Notify,_,__1,__2,body,patternInput,reset,state;
   patternInput=f(undefined);
   state=patternInput[2];
   reset=patternInput[1];
   body=patternInput[0];
   Notify=function()
   {
    return reset(undefined);
   };
   __1=(Data()).NewBody(body,{$:0});
   _=function(value)
   {
    return(Tree()).Set(value);
   };
   __2=_(__1);
   return(NewRecord())(Form_2(),{Body:__53(__2),Dispose:function()
   {
   },Notify:Notify,State:state});
  };
  __7=__3(__4);
  return __12(__7);
 };
 (Data()).op_LessMultiplyGreater=function(f,x)
 {
  var _,__1;
  _=BaseFormlet();
  __1=_.Apply(f,x);
  return __12(__1);
 };
 (Data()).PropagateRenderFrom=function(f1,f2)
 {
  var _,__1;
  if(f1.hasOwnProperty("Render"))
   {
    _=f1.Render;
    __1=f2.Render=_;
   }
  __1;
  return f2;
 };
 (Data()).NewBody=function(arg00,arg10)
 {
  return(Body()).New(arg00,arg10);
 };
 (Data()).RX=Default();
 (Data()).Layout=new(Formlet()).LayoutProvider(new(Base()).LayoutUtils({Reactive:Default()}));
 __54=Layout();
 (Data()).UtilsProvider={Reactive:RX(),DefaultLayout:__54.get_Vertical()};
 (Data()).BaseFormlet=new(Base())["FormletProvider`1"](UtilsProvider());
 (Data()).Validator=new(Base()).Validator(new(Data()).ValidatorProvidor());
 (Formlet_2()).Map=function(f,formlet)
 {
  var _,__1,__2,__3;
  _=BaseFormlet();
  __2=_.Map(f,formlet);
  __1=function(f2)
  {
   return(PropagateRenderFrom())(formlet,f2);
  };
  __3=__1(__2);
  return __12(__3);
 };
 (Formlet_2()).InitWith=function(value,formlet)
 {
  var _,__1,__2,__3;
  _=BaseFormlet();
  __2=_.InitWith(value,formlet);
  __1=function(f2)
  {
   return(PropagateRenderFrom())(formlet,f2);
  };
  __3=__1(__2);
  return __12(__3);
 };
 (Formlet_2()).WithCancelation=function(formlet,c)
 {
  var _,__1,__2,__3;
  _=BaseFormlet();
  __2=_.WithCancelation(formlet,c);
  __1=function(f2)
  {
   return(PropagateRenderFrom())(formlet,f2);
  };
  __3=__1(__2);
  return __12(__3);
 };
 (Formlet_2()).WithLayout=function(l,formlet)
 {
  var _,__1,__2,__3;
  _=BaseFormlet();
  __2=_.WithLayout(l,formlet);
  __1=function(f2)
  {
   return(PropagateRenderFrom())(formlet,f2);
  };
  __3=__1(__2);
  return __12(__3);
 };
 (Formlet_2()).WithLayoutOrDefault=function(formlet)
 {
  var _,__1,__2,__3;
  _=BaseFormlet();
  __2=_.WithLayoutOrDefault(formlet);
  __1=function(f2)
  {
   return(PropagateRenderFrom())(formlet,f2);
  };
  __3=__1(__2);
  return __12(__3);
 };
 (Formlet_2()).ApplyLayout=function(formlet)
 {
  var _,__1,__2,__3;
  _=BaseFormlet();
  __2=_.ApplyLayout(formlet);
  __1=function(f2)
  {
   return(PropagateRenderFrom())(formlet,f2);
  };
  __3=__1(__2);
  return __12(__3);
 };
 (Formlet_2()).WithNotification=function(c,formlet)
 {
  var _,__1,__2,__3;
  _=BaseFormlet();
  __2=_.WithNotification(c,formlet);
  __1=function(f2)
  {
   return(PropagateRenderFrom())(formlet,f2);
  };
  __3=__1(__2);
  return __12(__3);
 };
 (Formlet_2()).SelectMany=function(formlet)
 {
  var __1,__2,__3,__4,__7;
  __2=__55(formlet);
  __1=function(arg00)
  {
   var _;
   _=BaseFormlet();
   return _.SelectMany(arg00);
  };
  __4=__1(__2);
  __3=function(f2)
  {
   return(PropagateRenderFrom())(formlet,f2);
  };
  __7=__3(__4);
  return __12(__7);
 };
 (Formlet_2()).FlipBody=function(formlet)
 {
  var _,__1,__2,__3;
  _=BaseFormlet();
  __2=_.FlipBody(formlet);
  __1=function(f2)
  {
   return(PropagateRenderFrom())(formlet,f2);
  };
  __3=__1(__2);
  return __12(__3);
 };
 (Formlet_2()).Return=__10;
 (Formlet_2()).ReturnEmpty=function(x)
 {
  var _,__1;
  _=BaseFormlet();
  __1=_.ReturnEmpty(x);
  return __12(__1);
 };
 (Formlet_2()).FailWith=function(fs)
 {
  var _,__1;
  _=BaseFormlet();
  __1=_.FailWith(fs);
  return __12(__1);
 };
 (Formlet_2()).MapResult=function(f,formlet)
 {
  var _,__1,__2,__3;
  _=BaseFormlet();
  __2=_.MapResult(f,formlet);
  __1=function(f2)
  {
   return(PropagateRenderFrom())(formlet,f2);
  };
  __3=__1(__2);
  return __12(__3);
 };
 (Formlet_2()).Switch=function(formlet)
 {
  var __1,__2,__3,__4,__7;
  __2=__55(formlet);
  __1=function(arg00)
  {
   var _;
   _=BaseFormlet();
   return _.Switch(arg00);
  };
  __4=__1(__2);
  __3=function(f2)
  {
   return(PropagateRenderFrom())(formlet,f2);
  };
  __7=__3(__4);
  return __12(__7);
 };
 (Formlet_2()).Replace=function(formlet,f)
 {
  var _,__1,__2,__3,arg10;
  arg10=function(x)
  {
   return f(x);
  };
  _=BaseFormlet();
  __2=_.Replace(formlet,arg10);
  __1=function(f2)
  {
   return(PropagateRenderFrom())(formlet,f2);
  };
  __3=__1(__2);
  return __12(__3);
 };
 (Formlet_2()).Empty=function()
 {
  var _,__1;
  _=BaseFormlet();
  __1=_.Empty();
  return __12(__1);
 };
 (Formlet_2()).MapBody=function(f,formlet)
 {
  var _,__1,__2,__3;
  _=BaseFormlet();
  __2=_.MapBody(f,formlet);
  __1=function(f2)
  {
   return(PropagateRenderFrom())(formlet,f2);
  };
  __3=__1(__2);
  return __12(__3);
 };
 (Formlet_2()).MapElement=function(f,formlet)
 {
  var __1,__2,__3,__4;
  __1=function(arg10)
  {
   var _;
   _=BaseFormlet();
   return _.MapBody(function(b)
   {
    return{Element:f(b.Element),Label:b.Label};
   },arg10);
  };
  __3=__1(formlet);
  __2=function(f2)
  {
   return(PropagateRenderFrom())(formlet,f2);
  };
  __4=__2(__3);
  return __12(__4);
 };
 (Formlet_2()).WithLabel=function(label,formlet)
 {
  var __1,__2,__3,__4;
  __1=function(arg10)
  {
   var _;
   _=BaseFormlet();
   return _.MapBody(function(body)
   {
    return{Element:body.Element,Label:label};
   },arg10);
  };
  __3=__1(formlet);
  __2=function(f2)
  {
   return(PropagateRenderFrom())(formlet,f2);
  };
  __4=__2(__3);
  return __12(__4);
 };
 (Formlet_2()).LiftResult=function(formlet)
 {
  var _,__1,__2,__3;
  _=BaseFormlet();
  __2=_.LiftResult(formlet);
  __1=function(f2)
  {
   return(PropagateRenderFrom())(formlet,f2);
  };
  __3=__1(__2);
  return __12(__3);
 };
 (Formlet_2()).OfElement=function(genElem)
 {
  var __1;
  __1=function()
  {
   var _,elem;
   elem=genElem(undefined);
   _=RX();
   return[elem,__6,_.Return({$:0,$0:undefined})];
  };
  return __56(__1);
 };
 (Formlet_2()).BuildForm=function(f)
 {
  var _;
  _=BaseFormlet();
  return _.BuildForm(f);
 };
 (Formlet_2()).InitWithFailure=function(formlet)
 {
  var _,__1,__2,__3;
  _=BaseFormlet();
  __2=_.InitWithFailure(formlet);
  __1=function(f2)
  {
   return(PropagateRenderFrom())(formlet,f2);
  };
  __3=__1(__2);
  return __12(__3);
 };
 (Formlet_2()).WithNotificationChannel=function(formlet)
 {
  var _,__1,__2,__3;
  _=BaseFormlet();
  __2=_.WithNotificationChannel(formlet);
  __1=function(f2)
  {
   return(PropagateRenderFrom())(formlet,f2);
  };
  __3=__1(__2);
  return __12(__3);
 };
 (Formlet_2()).New=function(f)
 {
  var _,__1;
  _=BaseFormlet();
  __1=_.New(f);
  return __12(__1);
 };
 (Formlet_2()).Sequence=function(fs)
 {
  var _,__2,__3,__4;
  _=function(source)
  {
   return(Map())(__13,source);
  };
  __3=_(fs);
  __2=function(arg00)
  {
   var __1;
   __1=BaseFormlet();
   return __1.Sequence(arg00);
  };
  __4=__2(__3);
  return __12(__4);
 };
 (Formlet_2()).Choose=function(fs)
 {
  var __19,__20,__21,__22,__23,__24,__4,__7,count;
  count={contents:0};
  __4=function(source)
  {
   return(Map())(function(f)
   {
    var __1,__2,__3;
    __1=function(formlet)
    {
     return(Map_1())(function(x)
     {
      var _;
      _=count.contents+1;
      count.contents=_;
      return[x,count.contents];
     },formlet);
    };
    __2=__1(f);
    __3=__57(__2);
    return __58(__3);
   },source);
  };
  __7=__4(fs);
  __20=__59(__7);
  __19=function(formlet)
  {
   return(Map_1())(function(xs)
   {
    var __1,__15,__16,__17,__18,__8,__9,projection;
    __1=function(list)
    {
     return(OfSeq())((Choose())(function(x)
     {
      var _,v;
      if(x.$==0)
       {
        v=x.$0;
        _={$:1,$0:v};
       }
      else
       {
        _={$:0};
       }
      return _;
     },list));
    };
    __9=__1(xs);
    projection=(Tupled())(__60);
    __8=function(list)
    {
     var __3,a;
     __3=(Tupled())(function(x)
     {
      return(Tupled())(function(y)
      {
       var _,__2;
       _=projection(x);
       __2=projection(y);
       return(Core()).Comparison.Compare(_,__2);
      });
     });
     a=(OfSeq_1())(list);
     (ArrayModule()).SortInPlaceWith(__3,a);
     return(OfArray())(a);
    };
    __16=__8(__9);
    __15=function(list)
    {
     var a;
     a=(OfSeq_1())(list);
     a.reverse();
     return(OfArray())(a);
    };
    __18=__15(__16);
    __17=function(list)
    {
     return(TryPick())((Tupled())(function(tupledArg)
     {
      var x;
      x=tupledArg[0];
      return{$:1,$0:x};
     }),list);
    };
    return __17(__18);
   },formlet);
  };
  __22=__19(__20);
  __21=function(arg20)
  {
   var _;
   _=(Data()).Validator;
   return _.Is(function(x)
   {
    return x.$==1;
   },"",arg20);
  };
  __24=__21(__22);
  __23=function(formlet)
  {
   return(Map_1())(function(x)
   {
    return x.$0;
   },formlet);
  };
  return __23(__24);
 };
 (Formlet_2()).Render=function(formlet)
 {
  var _,__1;
  __1=formlet.Run(__6);
  _=function(f2)
  {
   return(PropagateRenderFrom())(formlet,f2);
  };
  return _(__1);
 };
 (Formlet_2()).BindWith=function(compose,formlet,f)
 {
  var _,__1,__2,__3,arg20;
  arg20=function(x)
  {
   return f(x);
  };
  _=BaseFormlet();
  __2=_.BindWith(compose,formlet,arg20);
  __1=function(f2)
  {
   return(PropagateRenderFrom())(formlet,f2);
  };
  __3=__1(__2);
  return __12(__3);
 };
 (Formlet_2()).Run=function(f,formlet)
 {
  return formlet.Run(f);
 };
 (Formlet_2()).Join=function(formlet)
 {
  var __1,__2,__3,__4,__7;
  __2=__55(formlet);
  __1=function(arg00)
  {
   var _;
   _=BaseFormlet();
   return _.Join(arg00);
  };
  __4=__1(__2);
  __3=function(f2)
  {
   return(PropagateRenderFrom())(formlet,f2);
  };
  __7=__3(__4);
  return __12(__7);
 };
 (Formlet_2()).Bind=__11;
 (Formlet_2()).Delay=function(f)
 {
  var _,__1;
  _=BaseFormlet();
  __1=_.Delay(function()
  {
   return f(undefined);
  });
  return __12(__1);
 };
 (Formlet_2()).Deletable=function(formlet)
 {
  var _,__1,__2,__3;
  _=BaseFormlet();
  __2=_.Deletable(formlet);
  __1=function(f2)
  {
   return(PropagateRenderFrom())(formlet,f2);
  };
  __3=__1(__2);
  return __12(__3);
 };
 (Formlet_2()).Never=function()
 {
  var _,__1;
  _=BaseFormlet();
  __1=_.Never();
  return __12(__1);
 };
 (Formlet_2()).ReplaceFirstWithFailure=function(formlet)
 {
  var _,__1,__2,__3;
  _=BaseFormlet();
  __2=_.ReplaceFirstWithFailure(formlet);
  __1=function(f2)
  {
   return(PropagateRenderFrom())(formlet,f2);
  };
  __3=__1(__2);
  return __12(__3);
 };
 (Formlet_2()).Flowlet=function(formlet)
 {
  var _,__1,__2,__3,__4;
  _=BaseFormlet();
  __1=Layout();
  __3=_.WithLayout(__1.get_Flowlet(),formlet);
  __2=function(f2)
  {
   return(PropagateRenderFrom())(formlet,f2);
  };
  __4=__2(__3);
  return __12(__4);
 };
 (Formlet_2()).Vertical=function(formlet)
 {
  var _,__1,__2,__3,__4;
  _=BaseFormlet();
  __1=Layout();
  __3=_.WithLayout(__1.get_Vertical(),formlet);
  __2=function(f2)
  {
   return(PropagateRenderFrom())(formlet,f2);
  };
  __4=__2(__3);
  return __12(__4);
 };
 (Formlet_2()).Horizontal=function(formlet)
 {
  var _,__1,__2,__3,__4;
  _=BaseFormlet();
  __1=Layout();
  __3=_.WithLayout(__1.get_Horizontal(),formlet);
  __2=function(f2)
  {
   return(PropagateRenderFrom())(formlet,f2);
  };
  __4=__2(__3);
  return __12(__4);
 };
 (Formlet_2()).BuildFormlet=__56;
 (Formlet_2()).Do=new(Formlet()).FormletBuilder();
 (Controls()).ElementButton=function(genElem)
 {
  var __4;
  __4=function()
  {
   var __2,__3,body,count,reset,state;
   state=(NewFail())();
   count={contents:0};
   __3=genElem(undefined);
   __2=function(arg10)
   {
    var _;
    _=Events();
    return _.OnClick(function()
    {
     return function()
     {
      var __1;
      state.Trigger({$:0,$0:count.contents});
      __1=count.contents+1;
      return count.contents=__1;
     };
    },arg10);
   };
   __2(__3);
   body=__3;
   reset=function()
   {
    count.contents=0;
    return state.Trigger({$:1,$0:(NewUnion())(FSharpList_1(),0)});
   };
   return[body,reset,state];
  };
  return __56(__4);
 };
 (Controls()).Button=function(label)
 {
  var __3,__4;
  __3=function(genElem)
  {
   return(ElementButton())(genElem);
  };
  __4=function()
  {
   var _,__1,__2;
   _=Tags();
   __2=(OfArray())([_.text(label)]);
   __1=Tags();
   return __1.NewTag("button",__2);
  };
  return __3(__4);
 };
 (Controls()).ReadOnlyInput=function(value)
 {
  return(InputField())(true,"text",InputTextClass(),value);
 };
 (Controls()).InputField=function(readOnly,typ,cls,value)
 {
  return(InputControl())(value,function(state)
  {
   var _,__1,__16,__3,__4,__7,__8,__9,input,ro;
   if(readOnly)
    {
     _=Attr();
     __1=(OfArray())([_.NewAttr("readonly","readonly")]);
    }
   else
    {
     __1=(NewUnion())(FSharpList_1(),0);
    }
   ro=__1;
   __8=function(x)
   {
    var __2;
    __2=Tags();
    return __2.NewTag("input",x);
   };
   __3=Attr();
   __4=Attr();
   __7=(OfArray())([__3.NewAttr("type",typ),__4.NewAttr("class",cls)]);
   __9=(OfSeq())((Append())(__7,ro));
   input=__8(__9);
   __16=function(arg10)
   {
    var __2;
    __2=Events();
    return __2.OnKeyUp(function()
    {
     return function()
     {
      var __15;
      if(!readOnly)
       {
        __15=state.Trigger({$:0,$0:input.get_Value()});
       }
      return __15;
     };
    },arg10);
   };
   __16(input);
   return input;
  });
 };
 (Controls()).Input=function(value)
 {
  return(InputField())(false,"text",InputTextClass(),value);
 };
 (Controls()).Password=function(value)
 {
  return(InputField())(false,"password","inputPassword",value);
 };
 (Controls()).ReadOnlyRadioButtonGroup=function(def,values)
 {
  return(RadioButtonGroupControl())(true,def,values);
 };
 (Controls()).RadioButtonGroupControl=function(readOnly,def,values)
 {
  var __29;
  __29=function()
  {
   var _,__1,__15,__16,__2,__22,__23,__24,__25,__26,__27,__28,__7,__8,__9,body,groupId,rbLbVls,reset,resetRB,state;
   _=Math;
   __1=Math;
   groupId="id"+Math.round.call(_,Math.random.call(__1)*100000000);
   if(def.$==0)
    {
     __9={$:0};
    }
   else
    {
     __2=function(list)
     {
      return(OfSeq())((MapIndexed())(function(ix)
      {
       return(Tupled())(function(tupledArg)
       {
        var value;
        value=tupledArg[1];
        return[ix,value];
       });
      },list));
     };
     __8=__2(values);
     __7=function(list)
     {
      return(TryPick())((Tupled())(function(tupledArg)
      {
       var __3,__4,defIx,ix,value;
       ix=tupledArg[0];
       value=tupledArg[1];
       if(def.$==0)
        {
         __4={$:0};
        }
       else
        {
         defIx=def.$0;
         if(defIx===ix)
          {
           __3={$:1,$0:value};
          }
         else
          {
           __3={$:0};
          }
         __4=__3;
        }
       return __4;
      }),list);
     };
     __9=__7(__8);
    }
   __16=__9;
   __15=function(o)
   {
    return(Maybe())((NewFail())(),function(arg00)
    {
     return(NewSuccess())(arg00);
    },o);
   };
   state=__15(__16);
   __22=function(list)
   {
    return(OfSeq())((Map())((Tupled())(function(tupledArg)
    {
     var __17,__18,__19,__20,__21,__3,__4,inp,label,value;
     label=tupledArg[0];
     value=tupledArg[1];
     __3=Attr();
     __4=Attr();
     __17=Attr();
     __19=(OfArray())([__3.NewAttr("class","inputRadio"),__4.NewAttr("type","radio"),__17.NewAttr("name",groupId)]);
     __18=Tags();
     if(readOnly)
      {
       __20=Attr();
       __21=(OfArray())([__20.NewAttr("disabled","disabled")]);
      }
     else
      {
       __21=(NewUnion())(FSharpList_1(),0);
      }
     inp=(op_MinusLess())(__18.NewTag("input",__19),__21);
     return[inp,label,value];
    }),list));
   };
   rbLbVls=__22(values);
   resetRB=function(rb)
   {
    return function(value)
    {
     return function(ix)
     {
      var __3,__4,defIx,objectArg,objectArg_1,objectArg_2;
      if(def.$==0)
       {
        objectArg=rb["HtmlProvider@22"];
        ((function(arg00)
        {
         return function(arg10)
         {
          return objectArg.RemoveAttribute(arg00,arg10);
         };
        }(rb.Body))("checked"));
        __4=state.Trigger({$:1,$0:(NewUnion())(FSharpList_1(),0)});
       }
      else
       {
        defIx=def.$0;
        if(defIx===ix)
         {
          objectArg_1=rb["HtmlProvider@22"];
          (((function(arg00)
          {
           return function(arg10)
           {
            return function(arg20)
            {
             return objectArg_1.SetProperty(arg00,arg10,arg20);
            };
           };
          }(rb.Body))("checked"))(true));
          __3=state.Trigger({$:0,$0:value});
         }
        else
         {
          objectArg_2=rb["HtmlProvider@22"];
          __3=((function(arg00)
          {
           return function(arg10)
           {
            return function(arg20)
            {
             return objectArg_2.SetProperty(arg00,arg10,arg20);
            };
           };
          }(rb.Body))("checked"))(false);
         }
        __4=__3;
       }
      return __4;
     };
    };
   };
   reset=function()
   {
    var __3;
    __3=function(list)
    {
     return(SeqModule()).IterateIndexed(function(ix)
     {
      return(Tupled())(function(tupledArg)
      {
       var rb,value;
       rb=tupledArg[0];
       value=tupledArg[2];
       return((resetRB(rb))(value))(ix);
      });
     },list);
    };
    return __3(rbLbVls);
   };
   __23=function(list)
   {
    return(OfSeq())((MapIndexed())(function(ix)
    {
     return(Tupled())(function(tupledArg)
     {
      var Label,__17,label,rb,value;
      rb=tupledArg[0];
      label=tupledArg[1];
      value=tupledArg[2];
      ((resetRB(rb))(value))(ix);
      __17=function(arg10)
      {
       var __3;
       __3=Events();
       return __3.OnClick(function()
       {
        return function()
        {
         var __4;
         if(!readOnly)
          {
           __4=state.Trigger({$:0,$0:value});
          }
         return __4;
        };
       },arg10);
      };
      __17(rb);
      Label={$:1,$0:function()
      {
       var __18,__3,__4;
       __3=Tags();
       __18=(OfArray())([__3.text(label)]);
       __4=Tags();
       return __4.NewTag("label",__18);
      }};
      return{Element:rb,Label:Label};
     });
    },list));
   };
   __25=__23(rbLbVls);
   __24=function(vs)
   {
    return(Tree()).FromSequence(vs);
   };
   __27=__24(__25);
   __26=function(arg0)
   {
    return(NewUnion())((Tree())["Edit`1"],0,arg0);
   };
   __28=__26(__27);
   body=__53(__28);
   return(NewRecord())(Form_2(),{Body:body,Dispose:__6,Notify:function()
   {
    return reset(undefined);
   },State:state});
  };
  return __61(__29);
 };
 (Controls()).RadioButtonGroup=function(def,values)
 {
  return(RadioButtonGroupControl())(false,def,values);
 };
 (Controls()).CheckboxGroup=function(values)
 {
  return(Controls()).CheckboxGroupControl(false,values);
 };
 (Controls()).CheckboxGroupControl=function(readOnly,values)
 {
  var __16,__17,__18,__19;
  __16=function(list)
  {
   return(OfSeq())((Map())((Tupled())(function(tupledArg)
   {
    var __15,__7,__8,__9,b,l,v;
    l=tupledArg[0];
    v=tupledArg[1];
    b=tupledArg[2];
    __8=(CheckboxControl())(readOnly,b);
    __7=function(formlet)
    {
     var __3,__4;
     __3=function(arg0)
     {
      return{$:1,$0:arg0};
     };
     __4=function()
     {
      var _,__1,__2;
      _=Tags();
      __2=(OfArray())([_.text(l)]);
      __1=Tags();
      return __1.NewTag("label",__2);
     };
     return(WithLabel())(__3(__4),formlet);
    };
    __15=__7(__8);
    __9=function(formlet)
    {
     return(Map_1())(function(b_1)
     {
      return[b_1,v];
     },formlet);
    };
    return __9(__15);
   }),list));
  };
  __17=__16(values);
  __19=__59(__17);
  __18=function(formlet)
  {
   return(Map_1())(function(list)
   {
    return(OfSeq())((Choose())((Tupled())(function(tupledArg)
    {
     var _,b,v;
     b=tupledArg[0];
     v=tupledArg[1];
     if(b)
      {
       _={$:1,$0:v};
      }
     else
      {
       _={$:0};
      }
     return _;
    }),list));
   },formlet);
  };
  return __18(__19);
 };
 (Controls()).CheckboxControl=function(readOnly,def)
 {
  var __23;
  __23=function()
  {
   var _,__1,__2,__20,__21,__22,__3,__4,__7,body,objectArg,objectArg_1,readOnlyAtts,reset,state;
   state=(NewSuccess())(def);
   if(readOnly)
    {
     _=Attr();
     __1=(OfArray())([_.NewAttr("disabled","disabled")]);
    }
   else
    {
     __1=(NewUnion())(FSharpList_1(),0);
    }
   readOnlyAtts=__1;
   __2=Attr();
   __3=Attr();
   __7=(OfArray())([__2.NewAttr("type","checkbox"),__3.NewAttr("class","inputCheckbox")]);
   __4=Tags();
   __21=(op_MinusLess())(__4.NewTag("input",__7),readOnlyAtts);
   __20=function(arg10)
   {
    var __8;
    __8=Events();
    return __8.OnClick(function(cb)
    {
     return function()
     {
      var __15,__16,__17,__18,__19,__9;
      if(!readOnly)
       {
        __9=cb.Body;
        __15=jQuery(__9);
        __16=__15.prop("checked");
        __18=__62(__16);
        __17=function(arg00)
        {
         return state.Trigger(arg00);
        };
        __19=__17(__18);
       }
      return __19;
     };
    },arg10);
   };
   __20(__21);
   body=__21;
   if(def)
    {
     objectArg=body["HtmlProvider@22"];
     __22=((function(arg00)
     {
      return function(arg10)
      {
       return function(arg20)
       {
        return objectArg.SetAttribute(arg00,arg10,arg20);
       };
      };
     }(body.Body))("defaultChecked"))("true");
    }
   else
    {
     objectArg_1=body["HtmlProvider@22"];
     __22=(function(arg00)
     {
      return function(arg10)
      {
       return objectArg_1.RemoveAttribute(arg00,arg10);
      };
     }(body.Body))("checked");
    }
   __22;
   reset=function()
   {
    var __8,objectArg_2,objectArg_3,objectArg_4;
    if(def)
     {
      objectArg_2=body["HtmlProvider@22"];
      __8=((function(arg00)
      {
       return function(arg10)
       {
        return function(arg20)
        {
         return objectArg_2.SetProperty(arg00,arg10,arg20);
        };
       };
      }(body.Body))("checked"))(true);
     }
    else
     {
      objectArg_3=body["HtmlProvider@22"];
      ((function(arg00)
      {
       return function(arg10)
       {
        return objectArg_3.RemoveAttribute(arg00,arg10);
       };
      }(body.Body))("checked"));
      objectArg_4=body["HtmlProvider@22"];
      __8=((function(arg00)
      {
       return function(arg10)
       {
        return function(arg20)
        {
         return objectArg_4.SetProperty(arg00,arg10,arg20);
        };
       };
      }(body.Body))("checked"))(false);
     }
    __8;
    return state.Trigger({$:0,$0:def});
   };
   reset(undefined);
   return[body,reset,state];
  };
  return __56(__23);
 };
 (Controls()).ReadOnlyCheckbox=function(def)
 {
  return(CheckboxControl())(true,def);
 };
 (Controls()).Checkbox=function(def)
 {
  return(CheckboxControl())(false,def);
 };
 (Controls()).InputControl=function(value,f)
 {
  var _;
  _=function()
  {
   var body,reset,state;
   state=(NewSuccess())(value);
   body=f(state);
   body.set_Value(value);
   reset=function()
   {
    body.set_Value(value);
    return state.Trigger({$:0,$0:value});
   };
   return[body,reset,state];
  };
  return __56(_);
 };
 (Controls()).ReadOnlyTextArea=function(value)
 {
  return(TextAreaControl())(true,value);
 };
 (Controls()).TextAreaControl=function(readOnly,value)
 {
  return(InputControl())(value,function(state)
  {
   var _,__1,__3,__4,__8,input;
   if(readOnly)
    {
     _=Attr();
     __1=(OfArray())([_.NewAttr("readonly","readonly")]);
    }
   else
    {
     __1=(NewUnion())(FSharpList_1(),0);
    }
   __4=__1;
   __3=function(x)
   {
    var __2;
    __2=Tags();
    return __2.NewTag("textarea",x);
   };
   input=__3(__4);
   __8=function(arg10)
   {
    var __2;
    __2=Events();
    return __2.OnKeyUp(function()
    {
     return function()
     {
      var __7;
      if(!readOnly)
       {
        __7=state.Trigger({$:0,$0:input.get_Value()});
       }
      return __7;
     };
    },arg10);
   };
   __8(input);
   return input;
  });
 };
 (Controls()).TextArea=function(value)
 {
  return(TextAreaControl())(false,value);
 };
 (Controls()).ReadOnlySelect=function(def,vls)
 {
  return(SelectControl())(true,def,vls);
 };
 (Controls()).SelectControl=function(readOnly,def,vls)
 {
  var __22;
  __22=function()
  {
   var _,__1,__16,__17,__18,__19,__2,__20,__21,__3,aVls,body,reset,sIx,sValue,select,state;
   _=function(list)
   {
    return(OfSeq())((Map())((Tupled())(__60),list));
   };
   __2=_(vls);
   __1=function(list)
   {
    return(OfSeq_1())(list);
   };
   aVls=__1(__2);
   if(def>=0)
    {
     __3=def<(SeqModule()).Length(vls);
    }
   else
    {
     __3=false;
    }
   sIx=__3?def:0;
   __16=function(list)
   {
    return(OfSeq())((MapIndexed())(function(i)
    {
     return(Tupled())(function(tupledArg)
     {
      var __15,__4,__7,__8,__9,nm;
      nm=tupledArg[0];
      __9=Tags();
      __4=Tags();
      __7=Attr();
      __8=i.toString();
      __15=(OfArray())([__4.text(nm),__7.NewAttr("value",__8)]);
      return __9.NewTag("option",__15);
     });
    },list));
   };
   __18=__16(vls);
   __17=function(x)
   {
    var __4;
    __4=Tags();
    return __4.NewTag("select",x);
   };
   select=__17(__18);
   if(readOnly)
    {
     __19=Attr();
     __20=(op_MinusLess())(select,(OfArray())([__19.NewAttr("disabled","disabled")]));
    }
   else
    {
     __20=select;
    }
   body=__20;
   sValue={$:0,$0:aVls[sIx]};
   state=(State_1()).FromResult(sValue);
   reset=function()
   {
    var __4,objectArg;
    __4=sIx.toString();
    objectArg=body["HtmlProvider@22"];
    (((function(arg00)
    {
     return function(arg10)
     {
      return function(arg20)
      {
       return objectArg.SetProperty(arg00,arg10,arg20);
      };
     };
    }(body.Body))("value"))(__4));
    return state.Trigger(sValue);
   };
   reset(undefined);
   __21=function(arg10)
   {
    var __4;
    __4=Events();
    return __4.OnChange(function()
    {
     var __15,__7,__8,__9,value;
     if(!readOnly)
      {
       value=body.get_Value();
       __7=aVls[Number(value)];
       __9=__62(__7);
       __8=function(arg00)
       {
        return state.Trigger(arg00);
       };
       __15=__8(__9);
      }
     return __15;
    },arg10);
   };
   __21(body);
   reset(undefined);
   return[body,reset,state];
  };
  return __56(__22);
 };
 (Controls()).Select=function(def,vls)
 {
  return(SelectControl())(false,def,vls);
 };
 (Enhance()).WithJsonPost=function(conf,formlet_1)
 {
  var _,__1,__15,__16,__17,__18,__19,__2,__20,__21,__22,__23,__29,__3,__30,__31,__32,__33,__4,__7,__8,__9,enc,enc_1,formAttrs,form_1,formlet_2,hiddenField,matchValue,matchValue_1,postUrl,submitButton,url;
  matchValue=conf.PostUrl;
  if(matchValue.$==0)
   {
    __1=(NewUnion())(FSharpList_1(),0);
   }
  else
   {
    url=matchValue.$0;
    _=Attr();
    __1=(OfArray())([_.NewAttr("action",url)]);
   }
  postUrl=__1;
  matchValue_1=conf.EncodingType;
  if(matchValue_1.$==0)
   {
    __3=(NewUnion())(FSharpList_1(),0);
   }
  else
   {
    enc=matchValue_1.$0;
    __2=Attr();
    __3=(OfArray())([__2.NewAttr("enctype",enc)]);
   }
  enc_1=__3;
  __9=Tags();
  __4=Attr();
  __7=Attr();
  __8=conf.ParameterName;
  __15=(OfArray())([__4.NewAttr("type","hidden"),__7.NewAttr("name",__8)]);
  hiddenField=__9.NewTag("input",__15);
  __18=Tags();
  __16=Attr();
  __17=Attr();
  __19=(OfArray())([__16.NewAttr("type","submit"),__17.NewAttr("value","Submit")]);
  submitButton=__18.NewTag("input",__19);
  __20=Attr();
  __21=Attr();
  __22=(NewUnion())(FSharpList_1(),1,__20.NewAttr("method","POST"),(NewUnion())(FSharpList_1(),1,__21.NewAttr("style","display:none"),postUrl));
  formAttrs=(OfSeq())((Append())(__22,enc_1));
  __23=Tags();
  __30=(op_MinusLess())(__23.NewTag("form",formAttrs),(OfArray())([hiddenField,submitButton]));
  __29=function(w)
  {
   return(OnAfterRender())(function(form)
   {
    var __24,__25,__26,__27,__28,enc_2,matchValue_2;
    matchValue_2=conf.EncodingType;
    if(matchValue_2.$==0)
     ;
    else
     {
      enc_2=matchValue_2.$0;
      if(enc_2==="multipart/form-data")
       {
        __24=form.Body;
        __25=jQuery(__24);
        __26=__25.attr("encoding","multipart/form-data");
        __27=__6(__26);
       }
      __28=__27;
     }
    return __28;
   },w);
  };
  __29(__30);
  form_1=__30;
  __31=function(formlet)
  {
   return(Map_1())(function(value)
   {
    var __24,__25,__26,__27,__28,data;
    __24=JSON;
    data=JSON.stringify.call(__24,value);
    __25=hiddenField.Body;
    __26=jQuery(__25);
    __26.val(data);
    __27=submitButton.Body;
    __28=jQuery(__27);
    return __28.click();
   },formlet);
  };
  formlet_2=__31(formlet_1);
  __33=(OfArray())([form_1,formlet_2]);
  __32=Tags();
  return __32.Div(__33);
 };
 (Enhance()).Many=function(formlet)
 {
  return(Enhance()).CustomMany((ManyConfiguration()).get_Default(),formlet);
 };
 (Enhance()).CustomMany=function(config,formlet_1)
 {
  var __15,__16,__17,__18,__19,__20,__21,__22,__23,__24,__8,__9,addButton,builder_,delF,manyF,reset,resetF,resetS;
  __9=(ElementButton())(function()
  {
   var _,__1,__2,__3,__4,__7;
   _=Attr();
   __1=config.AddIconClass;
   __3=(OfArray())([_.NewAttr("class",__1)]);
   __2=Tags();
   __7=(NewUnion())(FSharpList_1(),0);
   __4=Tags();
   return(op_MinusLess())(__2.Div(__3),(OfArray())([__4.Div(__7)]));
  });
  __8=function(formlet)
  {
   return(Formlet_2()).InitWith(1,formlet);
  };
  addButton=__8(__9);
  __15=(ElementButton())(function()
  {
   var _,__1,__2,__3,__4,__7;
   _=Attr();
   __1=config.RemoveIconClass;
   __3=(OfArray())([_.NewAttr("class",__1)]);
   __2=Tags();
   __7=(NewUnion())(FSharpList_1(),0);
   __4=Tags();
   return(op_MinusLess())(__2.Div(__3),(OfArray())([__4.Div(__7)]));
  });
  __17=__63(__15);
  __16=function(c)
  {
   return(Formlet_2()).WithCancelation(formlet_1,c);
  };
  __18=__16(__17);
  __20=__64(__18);
  __19=function(formlet)
  {
   return(Enhance()).Deletable(formlet);
  };
  delF=__19(__20);
  manyF=function()
  {
   var _,__1,__2,__3;
   __1=(Enhance()).Many_(addButton,function()
   {
    return delF;
   });
   _=function(formlet)
   {
    return(Map_1())(function(source)
    {
     return(OfSeq())(source);
    },formlet);
   };
   __2=_(__1);
   __3=__65(__2);
   return __66(__3);
  };
  resetS=(NewSuccess())(undefined);
  __21=BaseFormlet();
  __22=__21.FromState(resetS);
  resetF=__12(__22);
  reset=function()
  {
   return resetS.Trigger({$:0,$0:undefined});
  };
  builder_=Do();
  __24=builder_.Delay(function()
  {
   return builder_.Bind(resetF,function()
   {
    return builder_.ReturnFrom(manyF(undefined));
   });
  });
  __23=function(formlet)
  {
   return(Formlet_2()).WithNotification(reset,formlet);
  };
  return __23(__24);
 };
 (Enhance()).Deletable=function(formlet)
 {
  return(Enhance()).Replace(formlet,function(value)
  {
   var _,value_1;
   if(value.$==1)
    {
     value_1=value.$0;
     _=(Return())({$:1,$0:value_1});
    }
   else
    {
     _=(Formlet_2()).ReturnEmpty({$:0});
    }
   return _;
  });
 };
 (Enhance()).Many_=function(add,f)
 {
  var _,__1,__2,__3,__4,__7,__8;
  _=function(formlet)
  {
   return(Map_1())(function(v)
   {
    return f(v);
   },formlet);
  };
  __2=_(add);
  __1=function(formlet)
  {
   return(Formlet_2()).SelectMany(formlet);
  };
  __4=__1(__2);
  __3=function(formlet)
  {
   return(Formlet_2()).FlipBody(formlet);
  };
  __8=__3(__4);
  __7=function(formlet)
  {
   return(Map_1())(function(source)
   {
    return(Choose())(__13,source);
   },formlet);
  };
  return __7(__8);
 };
 (Enhance()).Replace=function(formlet_1,f)
 {
  var __2,x;
  __2=function(formlet)
  {
   return(MapResult())(function(res)
   {
    var _,__1,fs,s;
    if(res.$==1)
     {
      fs=res.$0;
      _=(Formlet_2()).FailWith(fs);
      __1=__62(_);
     }
    else
     {
      s=res.$0;
      __1={$:0,$0:f(s)};
     }
    return __1;
   },formlet);
  };
  x=__2(formlet_1);
  return(Formlet_2()).Switch(x);
 };
 (Enhance()).Cancel=function(formlet,isCancel)
 {
  return(Formlet_2()).Replace(formlet,function(value)
  {
   var _;
   if(isCancel(value))
    {
     _=(Formlet_2()).Empty();
    }
   else
    {
     _=(Return())(value);
    }
   return _;
  });
 };
 (Enhance()).WithRowConfiguration=function(rc,formlet)
 {
  var __1,__2;
  __2=__66(formlet);
  __1=function(formlet_1)
  {
   var _;
   _=Layout();
   return(WithLayout())(_.RowLayout(rc),formlet_1);
  };
  return __1(__2);
 };
 (Enhance()).WithLegend=function(label,formlet_1)
 {
  var __8;
  __8=function(formlet)
  {
   return(MapBody())(function(body)
   {
    var _,__1,__2,__3,__4,__7,element,label_1,matchValue;
    _=Tags();
    __2=(OfArray())([_.text(label)]);
    __1=Tags();
    matchValue=body.Label;
    if(matchValue.$==0)
     {
      __3=body.Element;
     }
    else
     {
      label_1=matchValue.$0;
      __3=(InTable())((OfArray())([(OfArray())([label_1(undefined),body.Element])]));
     }
    __7=(OfArray())([__1.NewTag("legend",__2),__3]);
    __4=Tags();
    element=__4.NewTag("fieldset",__7);
    return{Element:element,Label:{$:0}};
   },formlet);
  };
  return __8(formlet_1);
 };
 (Enhance()).WithCssClass=function(css,formlet_1)
 {
  var _;
  _=function(formlet)
  {
   return(MapElement())(function(el)
   {
    var objectArg;
    objectArg=el["HtmlProvider@22"];
    ((function(arg00)
    {
     return function(arg10)
     {
      return objectArg.AddClass(arg00,arg10);
     };
    }(el.Body))(css));
    return el;
   },formlet);
  };
  return _(formlet_1);
 };
 (Enhance()).WithFormContainer=function(formlet)
 {
  return(Enhance()).WithCustomFormContainer((FormContainerConfiguration()).get_Default(),formlet);
 };
 (Enhance()).WithCustomFormContainer=function(fc,formlet)
 {
  var __42,__43;
  __43=__66(formlet);
  __42=function(formlet_1)
  {
   return(MapElement())(function(formEl)
   {
    var __19,__20,__21,__22,__23,__24,__25,__26,__27,__28,__29,__30,__31,__32,__33,__34,__35,__36,__37,__38,__39,__4,__40,__41,__7,cell,cls,description,matchValue,matchValue_1,objectArg_1,objectArg_2,style,tb;
    __7=fc.Description;
    __4=function(o)
    {
     return(Maybe())((NewUnion())(FSharpList_1(),0),function(descr)
     {
      var _,__1,__2,__3,genEl,text;
      if(descr.$==1)
       {
        genEl=descr.$0;
        __3=(OfArray())([genEl(undefined)]);
       }
      else
       {
        text=descr.$0;
        _=Tags();
        __2=(OfArray())([_.text(text)]);
        __1=Tags();
        __3=(OfArray())([__1.NewTag("p",__2)]);
       }
      return __3;
     },o);
    };
    description=__4(__7);
    __20=fc.Header;
    __19=function(o)
    {
     var _,__1,__2;
     _=Attr();
     __2=(OfArray())([_.NewAttr("class","headerPanel")]);
     __1=Tags();
     return(Maybe())((InTable())((OfArray())([(OfArray())([(op_MinusLess())(__1.Div(__2),description)]),(OfArray())([formEl])])),function(formElem)
     {
      var __15,__16,__17,__18,__3,__8,__9,genElem,hdr,header,text;
      if(formElem.$==1)
       {
        genElem=formElem.$0;
        __15=genElem(undefined);
       }
      else
       {
        text=formElem.$0;
        __3=Tags();
        __9=(OfArray())([__3.text(text)]);
        __8=Tags();
        __15=__8.NewTag("h1",__9);
       }
      hdr=__15;
      __16=Attr();
      __18=(OfArray())([__16.NewAttr("class","headerPanel")]);
      __17=Tags();
      header=(op_MinusLess())(__17.Div(__18),(NewUnion())(FSharpList_1(),1,hdr,description));
      return(InTable())((OfArray())([(OfArray())([header]),(OfArray())([formEl])]));
     },o);
    };
    tb=__19(__20);
    __21=Attr();
    __23=(OfArray())([__21.NewAttr("class","formlet")]);
    __22=Tags();
    cell=(op_MinusLess())(__22.NewTag("td",__23),(OfArray())([tb]));
    __25=fc.BorderColor;
    __24=function(o)
    {
     return(Maybe())(undefined,function(color)
     {
      var _,__1;
      _=function(arg00_1)
      {
       var objectArg;
       objectArg=cell["HtmlProvider@22"];
       return(function(arg00)
       {
        return function(arg10)
        {
         return objectArg.SetStyle(arg00,arg10);
        };
       }(cell.Body))(arg00_1);
      };
      __1="border-color: "+color;
      return _(__1);
     },o);
    };
    __24(__25);
    __27=fc.BackgroundColor;
    __26=function(value)
    {
     return(MapOption())(__13,value);
    };
    __28=fc.Padding.Left;
    __29=fc.Padding.Right;
    __30=fc.Padding.Top;
    __31=fc.Padding.Bottom;
    __33=(OfArray())([["background-color",__26(__27)],["padding-left",__67(__28)],["padding-right",__67(__29)],["padding-top",__67(__30)],["padding-bottom",__67(__31)]]);
    __32=function(list)
    {
     return(SeqModule()).Iterate((Tupled())(function(tupledArg)
     {
      var _,name,objectArg,v,value;
      name=tupledArg[0];
      value=tupledArg[1];
      if(value.$==0)
       ;
      else
       {
        v=value.$0;
        objectArg=cell["HtmlProvider@22"];
        _=((function(arg00)
        {
         return function(arg10)
         {
          return function(arg20)
          {
           return objectArg.SetCss(arg00,arg10,arg20);
          };
         };
        }(cell.Body))(name))(v);
       }
      return _;
     }),list);
    };
    __32(__33);
    matchValue=fc.Style;
    if(matchValue.$==0)
     ;
    else
     {
      style=matchValue.$0;
      objectArg_1=cell["HtmlProvider@22"];
      __34=(function(arg00)
      {
       return function(arg10)
       {
        return objectArg_1.SetStyle(arg00,arg10);
       };
      }(cell.Body))(style);
     }
    __34;
    matchValue_1=fc.CssClass;
    if(matchValue_1.$==0)
     ;
    else
     {
      cls=matchValue_1.$0;
      objectArg_2=cell["HtmlProvider@22"];
      __35=(function(arg00)
      {
       return function(arg10)
       {
        return objectArg_2.AddClass(arg00,arg10);
       };
      }(cell.Body))(cls);
     }
    __35;
    __37=(OfArray())([cell]);
    __36=Tags();
    __39=(OfArray())([__36.NewTag("tr",__37)]);
    __38=Tags();
    __41=(OfArray())([__38.NewTag("tbody",__39)]);
    __40=Tags();
    return __40.NewTag("table",__41);
   },formlet_1);
  };
  return __42(__43);
 };
 (Enhance()).WithLabelLeft=function(formlet_1)
 {
  var __20;
  __20=function(formlet)
  {
   return(MapBody())(function(body)
   {
    var Label,_,__1,__15,__16,__17,__18,__19,__2,__3,__4,__7,__8,__9,el,l,label,matchValue;
    matchValue=body.Label;
    if(matchValue.$==0)
     {
      __1=(NewUnion())(FSharpList_1(),0);
      _=Tags();
      __2=_.NewTag("span",__1);
     }
    else
     {
      l=matchValue.$0;
      __2=l(undefined);
     }
    label=__2;
    __4=(OfArray())([body.Element]);
    __3=Tags();
    __8=(OfArray())([label]);
    __7=Tags();
    __15=(OfArray())([__3.NewTag("td",__4),__7.NewTag("td",__8)]);
    __9=Tags();
    __17=(OfArray())([__9.NewTag("tr",__15)]);
    __16=Tags();
    __19=(OfArray())([__16.NewTag("tbody",__17)]);
    __18=Tags();
    el=__18.NewTag("table",__19);
    Label={$:0};
    return{Element:el,Label:Label};
   },formlet);
  };
  return __20(formlet_1);
 };
 (Enhance()).WithLabelAbove=function(formlet_1)
 {
  var __22;
  __22=function(formlet)
  {
   return(MapBody())(function(body)
   {
    var Label,_,__1,__15,__16,__17,__18,__19,__2,__20,__21,__3,__4,__7,__8,__9,el,l,label,matchValue;
    matchValue=body.Label;
    if(matchValue.$==0)
     {
      __1=(NewUnion())(FSharpList_1(),0);
      _=Tags();
      __2=_.NewTag("span",__1);
     }
    else
     {
      l=matchValue.$0;
      __2=l(undefined);
     }
    label=__2;
    __4=(OfArray())([label]);
    __3=Tags();
    __8=(OfArray())([__3.NewTag("td",__4)]);
    __7=Tags();
    __15=(OfArray())([body.Element]);
    __9=Tags();
    __17=(OfArray())([__9.NewTag("td",__15)]);
    __16=Tags();
    __19=(OfArray())([__7.NewTag("tr",__8),__16.NewTag("tr",__17)]);
    __18=Tags();
    __21=(OfArray())([__18.NewTag("tbody",__19)]);
    __20=Tags();
    el=__20.NewTag("table",__21);
    Label={$:0};
    return{Element:el,Label:Label};
   },formlet);
  };
  return __22(formlet_1);
 };
 (Enhance()).WithTextLabel=function(label,formlet)
 {
  return(WithLabel_1())(function()
  {
   var _,__1,__2;
   _=Tags();
   __2=(OfArray())([_.text(label)]);
   __1=Tags();
   return __1.NewTag("label",__2);
  },formlet);
 };
 (Enhance()).WithLabel=function(labelGen,formlet)
 {
  return(WithLabel())({$:1,$0:labelGen},formlet);
 };
 (Enhance()).WithLabelAndInfo=function(label,info,formlet)
 {
  var lblTbl;
  lblTbl=function()
  {
   var _,__1,__2,__3,__4,__7,__8;
   _=Tags();
   __2=(OfArray())([_.text(label)]);
   __1=Tags();
   __3=Attr();
   __4=Attr();
   __8=(OfArray())([__3.NewAttr("title",info),__4.NewAttr("class","infoIcon")]);
   __7=Tags();
   return(InTable())((OfArray())([(OfArray())([__1.NewTag("label",__2),__7.NewTag("span",__8)])]));
  };
  return(WithLabel_1())(lblTbl,formlet);
 };
 (Enhance()).WithLabelConfiguration=function(lc,formlet)
 {
  var __1,__2;
  __2=__66(formlet);
  __1=function(formlet_1)
  {
   var _;
   _=Layout();
   return(WithLayout())(_.LabelLayout(lc),formlet_1);
  };
  return __1(__2);
 };
 (Enhance()).WithErrorFormlet=function(f,formlet)
 {
  var __1,builder_;
  builder_=Do();
  __1=builder_.Delay(function()
  {
   return builder_.Bind((LiftResult())(formlet),function(_arg11)
   {
    var _,builder__1,msgs;
    if(_arg11.$==1)
     {
      msgs=_arg11.$0;
      builder__1=Do();
      _=builder__1.Delay(function()
      {
       return builder__1.Bind(f(msgs),function()
       {
        return builder__1.Return(_arg11);
       });
      });
     }
    else
     {
      _=(Return())(_arg11);
     }
    return builder_.ReturnFrom(_);
   });
  });
  return __68(__1);
 };
 (Enhance()).WithValidationFrame=function(formlet)
 {
  return(Enhance()).WithCustomValidationFrame((ValidationFrameConfiguration()).get_Default(),formlet);
 };
 (Enhance()).WithCustomValidationFrame=function(vc,formlet_1)
 {
  var __20;
  __20=function(formlet)
  {
   return(Enhance()).WrapFormlet(function(state)
   {
    return function(body)
    {
     var _,__1,__18,__19;
     __1=(OfArray())([body.Element]);
     _=Tags();
     __19=_.Div(__1);
     __18=function(w)
     {
      return(OnAfterRender())(function(panel)
      {
       var __16,__17;
       __16=function(res)
       {
        var __15,__2,__3,__4,__7,__8,__9,cls,cls_1,cls_2,cls_3,matchValue,matchValue_1,matchValue_2,matchValue_3,matchValue_4,matchValue_5,objectArg,objectArg_1,objectArg_2,objectArg_3,objectArg_4,objectArg_5,objectArg_6,objectArg_7,style,style_1;
        if(res.$==1)
         {
          matchValue=vc.ValidClass;
          if(matchValue.$==1)
           {
            cls=matchValue.$0;
            objectArg=panel["HtmlProvider@22"];
            __2=(function(arg00)
            {
             return function(arg10)
             {
              return objectArg.RemoveClass(arg00,arg10);
             };
            }(panel.Body))(cls);
           }
          __2;
          matchValue_1=vc.ErrorClass;
          if(matchValue_1.$==1)
           {
            cls_1=matchValue_1.$0;
            objectArg_1=panel["HtmlProvider@22"];
            __3=(function(arg00)
            {
             return function(arg10)
             {
              return objectArg_1.AddClass(arg00,arg10);
             };
            }(panel.Body))(cls_1);
           }
          __3;
          matchValue_2=vc.ErrorStyle;
          if(matchValue_2.$==1)
           {
            style=matchValue_2.$0;
            objectArg_2=panel["HtmlProvider@22"];
            __4=(function(arg00)
            {
             return function(arg10)
             {
              return objectArg_2.SetStyle(arg00,arg10);
             };
            }(panel.Body))(style);
           }
          else
           {
            objectArg_3=panel["HtmlProvider@22"];
            __4=(function(arg00)
            {
             return function(arg10)
             {
              return objectArg_3.SetStyle(arg00,arg10);
             };
            }(panel.Body))("");
           }
          __15=__4;
         }
        else
         {
          matchValue_3=vc.ErrorClass;
          if(matchValue_3.$==1)
           {
            cls_2=matchValue_3.$0;
            objectArg_4=panel["HtmlProvider@22"];
            __7=(function(arg00)
            {
             return function(arg10)
             {
              return objectArg_4.RemoveClass(arg00,arg10);
             };
            }(panel.Body))(cls_2);
           }
          __7;
          matchValue_4=vc.ValidClass;
          if(matchValue_4.$==1)
           {
            cls_3=matchValue_4.$0;
            objectArg_5=panel["HtmlProvider@22"];
            __8=(function(arg00)
            {
             return function(arg10)
             {
              return objectArg_5.AddClass(arg00,arg10);
             };
            }(panel.Body))(cls_3);
           }
          __8;
          matchValue_5=vc.ValidStyle;
          if(matchValue_5.$==1)
           {
            style_1=matchValue_5.$0;
            objectArg_6=panel["HtmlProvider@22"];
            __9=(function(arg00)
            {
             return function(arg10)
             {
              return objectArg_6.SetStyle(arg00,arg10);
             };
            }(panel.Body))(style_1);
           }
          else
           {
            objectArg_7=panel["HtmlProvider@22"];
            __9=(function(arg00)
            {
             return function(arg10)
             {
              return objectArg_7.SetStyle(arg00,arg10);
             };
            }(panel.Body))("");
           }
          __15=__9;
         }
        return __15;
       };
       __17=state.Subscribe((Of())(__16));
       return __6(__17);
      },w);
     };
     __18(__19);
     return __19;
    };
   },formlet);
  };
  return __20(formlet_1);
 };
 (Enhance()).WithErrorSummary=function(label,formlet)
 {
  var __18,builder_,errrFormlet;
  errrFormlet=function(fs)
  {
   return(OfElement())(function()
   {
    var _,__1,__15,__16,__17,__2,__8,__9;
    _=Tags();
    __2=(OfArray())([_.text(label)]);
    __1=Tags();
    __8=function(list)
    {
     return(OfSeq())((Map())(function(f)
     {
      var __3,__4,__7;
      __3=Tags();
      __7=(OfArray())([__3.text(f)]);
      __4=Tags();
      return __4.NewTag("li",__7);
     },list));
    };
    __15=__8(fs);
    __9=function(x)
    {
     var __3;
     __3=Tags();
     return __3.NewTag("ul",x);
    };
    __17=(OfArray())([__1.NewTag("legend",__2),__9(__15)]);
    __16=Tags();
    return __16.NewTag("fieldset",__17);
   });
  };
  builder_=Do();
  __18=builder_.Delay(function()
  {
   return builder_.Bind((LiftResult())(formlet),function(_arg10)
   {
    var _,__1,__2,fs;
    if(_arg10.$==1)
     {
      fs=_arg10.$0;
      __1=errrFormlet(fs);
      _=function(formlet_1)
      {
       return(Map_1())(function()
       {
        return _arg10;
       },formlet_1);
      };
      __2=_(__1);
     }
    else
     {
      __2=(Return())(_arg10);
     }
    return builder_.ReturnFrom(__2);
   });
  });
  return __68(__18);
 };
 (Enhance()).WithSubmitButton=function(formlet)
 {
  return(Enhance()).WithCustomSubmitButton((get_Default_1())(),formlet);
 };
 (Enhance()).WithCustomSubmitButton=function(buttonConf,formlet)
 {
  var _,buttonConf_1,matchValue;
  matchValue=buttonConf.Label;
  if(matchValue.$==0)
   {
    _={Label:{$:1,$0:"Submit"},Style:buttonConf.Style,Class:buttonConf.Class};
   }
  else
   {
    _=buttonConf;
   }
  buttonConf_1=_;
  return(Enhance()).WithSubmitFormlet(formlet,function(res)
  {
   var __1,__2,__3;
   __2=res.$==0?true:false;
   __1=function(enabled)
   {
    return(InputButton())(buttonConf_1,enabled);
   };
   __3=__1(__2);
   return __63(__3);
  });
 };
 (Enhance()).WithSubmitFormlet=function(formlet,submit)
 {
  var __1,__2,__3,__4,builder_;
  builder_=Do();
  __1=builder_.Delay(function()
  {
   var _;
   _=__58(formlet);
   return builder_.Bind(__57(_),function(_arg5)
   {
    return builder_.Bind(submit(_arg5),function()
    {
     return builder_.Return(_arg5);
    });
   });
  });
  __3=__68(__1);
  __2=function(f2)
  {
   return(PropagateRenderFrom())(formlet,f2);
  };
  __4=__2(__3);
  return __12(__4);
 };
 (Enhance()).InputButton=function(conf,enabled)
 {
  var __19;
  __19=function()
  {
   var _,__1,__15,__16,__17,__18,__2,__3,__4,__9,cls,count,label,matchValue,matchValue_1,objectArg,objectArg_1,objectArg_2,reset,state,style,submit,submit_1;
   state=(NewFail())();
   count={contents:0};
   label=(Maybe())("Submit",__13,conf.Label);
   _=Attr();
   __2=(OfArray())([_.NewAttr("type","button")]);
   __1=Tags();
   __3=Attr();
   __4=Attr();
   __15=(op_MinusLess())(__1.NewTag("input",__2),(OfArray())([__3.NewAttr("class","submitButton"),__4.NewAttr("value",label)]));
   __9=function(arg10)
   {
    var __7;
    __7=Events();
    return __7.OnClick(function()
    {
     return function()
     {
      var __8;
      __8=count.contents+1;
      count.contents=__8;
      return state.Trigger({$:0,$0:count.contents});
     };
    },arg10);
   };
   __9(__15);
   submit=__15;
   if(!enabled)
    {
     objectArg=submit["HtmlProvider@22"];
     __16=(function(arg00)
     {
      return function(arg10)
      {
       return objectArg.AddClass(arg00,arg10);
      };
     }(submit.Body))("disabledButton");
    }
   __16;
   matchValue=conf.Style;
   if(matchValue.$==1)
    {
     style=matchValue.$0;
     objectArg_1=submit["HtmlProvider@22"];
     __17=(function(arg00)
     {
      return function(arg10)
      {
       return objectArg_1.SetStyle(arg00,arg10);
      };
     }(submit.Body))(style);
    }
   __17;
   matchValue_1=conf.Class;
   if(matchValue_1.$==1)
    {
     cls=matchValue_1.$0;
     objectArg_2=submit["HtmlProvider@22"];
     __18=(function(arg00)
     {
      return function(arg10)
      {
       return objectArg_2.AddClass(arg00,arg10);
      };
     }(submit.Body))(cls);
    }
   __18;
   submit_1=submit;
   reset=function()
   {
    count.contents=0;
    return state.Trigger({$:1,$0:(NewUnion())(FSharpList_1(),0)});
   };
   state.Trigger({$:1,$0:(NewUnion())(FSharpList_1(),0)});
   return[submit_1,reset,state];
  };
  return __56(__19);
 };
 (Enhance()).WithResetButton=function(formlet)
 {
  return(Enhance()).WithCustomResetButton((get_Default_1())(),formlet);
 };
 (Enhance()).WithCustomResetButton=function(buttonConf,formlet)
 {
  var _,__1,__2,buttonConf_1,matchValue;
  matchValue=buttonConf.Label;
  if(matchValue.$==0)
   {
    _={Label:{$:1,$0:"Reset"},Style:buttonConf.Style,Class:buttonConf.Class};
   }
  else
   {
    _=buttonConf;
   }
  buttonConf_1=_;
  __2=(InputButton())(buttonConf_1,true);
  __1=function(reset)
  {
   return(Enhance()).WithResetFormlet(formlet,reset);
  };
  return __1(__2);
 };
 (Enhance()).WithResetFormlet=function(formlet,reset)
 {
  var _,__1,__15,__2,__3,__7,__8,__9,builder_,button,formlet_1;
  _=__65(formlet);
  __1=__66(_);
  __2=__58(__1);
  __3=__57(__2);
  formlet_1=__69(__3);
  button=(LiftResult())(reset);
  builder_=Do();
  __7=builder_.Delay(function()
  {
   return builder_.Bind(formlet_1,(Tupled())(function(_arg3)
   {
    var notify,v;
    v=_arg3[0];
    notify=_arg3[1];
    return builder_.Bind(button,function(_arg2)
    {
     var __4;
     if(_arg2.$==0)
      {
       __4=notify(undefined);
      }
     __4;
     return builder_.Return(v);
    });
   }));
  });
  __9=__68(__7);
  __8=function(f2)
  {
   return(PropagateRenderFrom())(formlet_1,f2);
  };
  __15=__8(__9);
  return __12(__15);
 };
 (Enhance()).WrapFormlet=function(wrapper,formlet)
 {
  var _;
  _=function()
  {
   var body,form,formlet_1,panel,patternInput;
   formlet_1=__65(formlet);
   form=(Formlet_2()).BuildForm(formlet_1);
   patternInput=((formlet_1.get_Layout()).Apply(form.Body)).$0;
   body=patternInput[0];
   panel=(wrapper(form.State))(body);
   return[panel,function()
   {
    return form.Notify(null);
   },form.State];
  };
  return __56(_);
 };
 (Enhance()).WithValidationIcon=function(formlet)
 {
  return(Enhance()).WithCustomValidationIcon((ValidationIconConfiguration()).get_Default(),formlet);
 };
 (Enhance()).WithCustomValidationIcon=function(vic,formlet)
 {
  var __25,__26,builder_,formlet_1,valid;
  formlet_1=__65(formlet);
  valid=function(res)
  {
   var __23,__24;
   __24=function()
   {
    var _,__1,__15,__16,__17,__18,__19,__2,__20,__21,__22,__3,__4,__7,__8,__9,msgs,title;
    if(res.$==1)
     {
      msgs=res.$0;
      _=function(x)
      {
       return function(y)
       {
        return x+" "+y;
       };
      };
      title=(SeqModule()).Fold(_,"",msgs);
      __1=Attr();
      __2=vic.ErrorIconClass;
      __3=Attr();
      __7=(OfArray())([__1.NewAttr("class",__2),__3.NewAttr("title",title)]);
      __4=Tags();
      __9=(NewUnion())(FSharpList_1(),0);
      __8=Tags();
      __22=(op_MinusLess())(__4.Div(__7),(OfArray())([__8.Div(__9)]));
     }
    else
     {
      __15=Attr();
      __16=vic.ValidIconClass;
      __17=Attr();
      __19=(OfArray())([__15.NewAttr("class",__16),__17.NewAttr("title","")]);
      __18=Tags();
      __21=(NewUnion())(FSharpList_1(),0);
      __20=Tags();
      __22=(op_MinusLess())(__18.Div(__19),(OfArray())([__20.Div(__21)]));
     }
    return __22;
   };
   __23=function(genElem)
   {
    return(OfElement())(genElem);
   };
   return __23(__24);
  };
  builder_=Do();
  __25=builder_.Delay(function()
  {
   return builder_.Bind((LiftResult())(formlet_1),function(_arg9)
   {
    return builder_.Bind(valid(_arg9),function()
    {
     return builder_.Return(_arg9);
    });
   });
  });
  __26=__68(__25);
  return __64(__26);
 };
 (Enhance()).WithSubmitAndResetButtons=function(formlet_1)
 {
  var _;
  _=function(formlet)
  {
   var inputRecord,inputRecord_1;
   inputRecord=(get_Default_1())();
   inputRecord_1=(get_Default_1())();
   return(Enhance()).WithCustomSubmitAndResetButtons({Label:{$:1,$0:"Submit"},Style:inputRecord.Style,Class:inputRecord.Class},{Label:{$:1,$0:"Reset"},Style:inputRecord_1.Style,Class:inputRecord_1.Class},formlet);
  };
  return _(formlet_1);
 };
 (Enhance()).WithCustomSubmitAndResetButtons=function(submitConf,resetConf,formlet_1)
 {
  var submitReset;
  submitReset=function(reset)
  {
   return function(result)
   {
    var _,__1,__2,__3,__4,__8,builder_,fs,reset_1,submit,value;
    if(result.$==1)
     {
      fs=result.$0;
      __1=(InputButton())(submitConf,false);
      _=function(formlet)
      {
       return(MapResult())(function()
       {
        return{$:1,$0:fs};
       },formlet);
      };
      __4=_(__1);
     }
    else
     {
      value=result.$0;
      __3=(InputButton())(submitConf,true);
      __2=function(formlet)
      {
       return(Map_1())(function()
       {
        return value;
       },formlet);
      };
      __4=__2(__3);
     }
    submit=__4;
    builder_=Do();
    reset_1=builder_.Delay(function()
    {
     return builder_.Bind((LiftResult())((InputButton())(resetConf,true)),function(_arg7)
     {
      var __7;
      if(_arg7.$==0)
       {
        __7=reset(undefined);
       }
      __7;
      return builder_.Return(undefined);
     });
    });
    __8=(op_LessMultiplyGreater())((op_LessMultiplyGreater())((Return())(function(v)
    {
     return function()
     {
      return v;
     };
    }),submit),reset_1);
    return __64(__8);
   };
  };
  return(Enhance()).WithSubmitAndReset(formlet_1,submitReset);
 };
 (Enhance()).WithSubmitAndReset=function(formlet,submReset)
 {
  var __2,__3,__4,builder_;
  builder_=Do();
  __3=builder_.Delay(function()
  {
   var _,__1;
   _=__58(formlet);
   __1=__57(_);
   return builder_.Bind(__69(__1),(Tupled())(function(_arg6)
   {
    var notify,res;
    res=_arg6[0];
    notify=_arg6[1];
    return builder_.ReturnFrom((submReset(function(arg00)
    {
     return notify(arg00);
    }))(res));
   }));
  });
  __2=function(f2)
  {
   return(PropagateRenderFrom())(formlet,f2);
  };
  __4=__2(__3);
  return __12(__4);
 };
 (Enhance()).WithResetAction=function(f,formlet)
 {
  var __1,__2,__3,__4,__7,__8;
  __1=function()
  {
   var form,notify;
   form=formlet.Build();
   notify=function(o)
   {
    var _;
    if(f(undefined))
     {
      _=form.Notify(o);
     }
    return _;
   };
   return(NewRecord())(Form_2(),{Body:form.Body,Dispose:form.Dispose,Notify:notify,State:form.State});
  };
  __3=__61(__1);
  __2=function(formlet_1)
  {
   return(WithLayout())(formlet.get_Layout(),formlet_1);
  };
  __7=__2(__3);
  __4=function(f2)
  {
   return(PropagateRenderFrom())(formlet,f2);
  };
  __8=__4(__7);
  return __12(__8);
 };
}());
