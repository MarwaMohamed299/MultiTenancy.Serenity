import{a as x,b as l,c as a}from"../../../_chunks/chunk-VYJLGJ67.js";import{a as e}from"../../../_chunks/chunk-IHLQ5LPA.js";import{c as t,f as d,g as n,h as i,i as p,j as g}from"../../../_chunks/chunk-7V7WNOD5.js";var w=d(g(),1);var m=d(g(),1);var P,y,I;P=[m.Decorators.registerClass("MultiTenancy.Administration.LanguageDialog")];var r=class r extends(I=m.EntityDialog){constructor(){super(...arguments);this.form=new l(this.idPrefix)}getFormKey(){return l.formKey}getIdProperty(){return e.idProperty}getLocalTextPrefix(){return e.localTextPrefix}getNameProperty(){return e.nameProperty}getService(){return a.baseUrl}};y=n(I),r=p(y,0,"LanguageDialog",P,r),t(r,"LanguageDialog"),i(y,1,r);var c=r;var u=d(g(),1);var T,f,L;T=[u.Decorators.registerClass("MultiTenancy.Administration.LanguageGrid")];var o=class o extends(L=u.EntityGrid){useAsync(){return!0}getColumnsKey(){return x.columnsKey}getDialogType(){return c}getIdProperty(){return e.idProperty}getLocalTextPrefix(){return e.localTextPrefix}getService(){return a.baseUrl}afterInit(){super.afterInit()}getDefaultSortBy(){return[e.Fields.LanguageName]}};f=n(L),o=p(f,0,"LanguageGrid",T,o),t(o,"LanguageGrid"),i(f,1,o);var s=o;var E=t(()=>(0,w.gridPageInit)(s),"default");export{E as default};
//# sourceMappingURL=LanguagePage.js.map
