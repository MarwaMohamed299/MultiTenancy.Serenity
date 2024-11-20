import{a as C,b as S}from"../../../_chunks/chunk-ATOSLBX7.js";import{a as w}from"../../../_chunks/chunk-GECC5FV5.js";import{d as v,e as D,f as R,g as r,h as u}from"../../../_chunks/chunk-VYJLGJ67.js";import"../../../_chunks/chunk-IHLQ5LPA.js";import{c as t,f as m,g as p,h as a,i as c,j as d}from"../../../_chunks/chunk-7V7WNOD5.js";var O=m(d(),1);var f=m(d(),1);var e=m(d(),1);var h=class h extends e.BaseDialog{constructor(o){super(o),this.permissions=new S({element:this.byId("Permissions"),showRevoke:!1}),R.List({RoleID:this.options.roleID},n=>{this.permissions.value=n.Entities.map(l=>({PermissionKey:l}))}),this.permissions.implicitPermissions=(0,e.getRemoteData)(C.Administration.ImplicitPermissions)}getDialogOptions(){let o=super.getDialogOptions();return o.buttons=[{text:(0,e.localText)("Dialogs.OkButton"),click:t(n=>{R.Update({RoleID:this.options.roleID,Permissions:this.permissions.value.map(l=>l.PermissionKey)},l=>{this.dialogClose(),window.setTimeout(()=>(0,e.notifySuccess)((0,e.localText)("Site.RolePermissionDialog.SaveSuccess")),0)})},"click")},{text:(0,e.localText)("Dialogs.CancelButton"),click:t(()=>this.dialogClose(),"click")}],o.title=(0,e.stringFormat)((0,e.localText)("Site.RolePermissionDialog.DialogTitle"),this.options.title),o}getTemplate(){return'<div id="~_Permissions"></div>'}};t(h,"RolePermissionDialog");var g=h;var b="edit-permissions",k,I,K;k=[f.Decorators.registerClass("MultiTenancy.Administration.RoleDialog")];var i=class i extends(K=f.EntityDialog){constructor(){super(...arguments);this.form=new D(this.idPrefix)}getFormKey(){return D.formKey}getIdProperty(){return r.idProperty}getLocalTextPrefix(){return r.localTextPrefix}getNameProperty(){return r.nameProperty}getService(){return u.baseUrl}getToolbarButtons(){let n=super.getToolbarButtons();return n.push({title:w.Site.RolePermissionDialog.EditButton,cssClass:b,icon:"fa-lock text-green",onClick:t(()=>{new g({roleID:this.entity.RoleId,title:this.entity.RoleName}).dialogOpen()},"onClick")}),n}updateInterface(){super.updateInterface(),this.toolbar.findButton(b).toggleClass("disabled",this.isNewOrDeleted())}};I=p(K),i=c(I,0,"RoleDialog",k,i),t(i,"RoleDialog"),a(I,1,i);var P=i;var x=m(d(),1);var B,T,E;B=[x.Decorators.registerClass("MultiTenancy.Administration.RoleGrid")];var s=class s extends(E=x.EntityGrid){getColumnsKey(){return v.columnsKey}getDialogType(){return P}getIdProperty(){return r.idProperty}getLocalTextPrefix(){return r.localTextPrefix}getService(){return u.baseUrl}constructor(o){super(o)}getDefaultSortBy(){return[r.Fields.RoleName]}};T=p(E),s=c(T,0,"RoleGrid",B,s),t(s,"RoleGrid"),a(T,1,s);var y=s;var Z=t(()=>(0,O.gridPageInit)(y),"default");export{Z as default};
//# sourceMappingURL=RolePage.js.map
