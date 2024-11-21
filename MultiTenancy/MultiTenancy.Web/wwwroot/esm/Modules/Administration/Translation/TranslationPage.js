import{i as l}from"../../../_chunks/chunk-35FB5TSV.js";import"../../../_chunks/chunk-IHLQ5LPA.js";import{c as s,f as m,g as p,h as c,i as d,j as f}from"../../../_chunks/chunk-7V7WNOD5.js";var v=m(f(),1);var t=m(f(),1);var T,h,C;T=[t.Decorators.registerClass()];var n=class n extends(C=t.EntityGrid){getIdProperty(){return"Key"}getLocalTextPrefix(){return"Administration.Translation"}getService(){return l.baseUrl}constructor(e){super(e),this.element.on("keyup."+this.uniqueName+" change."+this.uniqueName,"input.custom-text",a=>{var i=(0,t.trimToNull)((0,t.Fluent)(a.target).val());i===""&&(i=null),this.view.getItemById((0,t.Fluent)(a.target).data("key")).CustomText=i,this.hasChanges=!0})}onClick(e,a,i){var g;if(super.onClick(e,a,i),e.defaultPrevented||(g=e==null?void 0:e.isDefaultPrevented)!=null&&g.call(e))return;let r=this.itemAt(a),o;if((0,t.Fluent)(e.target).hasClass("source-text")){if(e.preventDefault(),o=s(()=>{r.CustomText=r.SourceText,this.view.updateItem(r.Key,r),this.hasChanges=!0},"done"),(0,t.isTrimmedEmpty)(r.CustomText)||(0,t.trimToEmpty)(r.CustomText)===(0,t.trimToEmpty)(r.SourceText)){o();return}(0,t.confirmDialog)((0,t.localText)("Db.Administration.Translation.OverrideConfirmation"),o);return}if((0,t.Fluent)(e.target).hasClass("target-text")){if(e.preventDefault(),o=s(()=>{r.CustomText=r.TargetText,this.view.updateItem(r.Key,r),this.hasChanges=!0},"done"),(0,t.isTrimmedEmpty)(r.CustomText)||(0,t.trimToEmpty)(r.CustomText)===(0,t.trimToEmpty)(r.TargetText)){o();return}(0,t.confirmDialog)((0,t.localText)("Db.Administration.Translation.OverrideConfirmation"),o);return}}getColumns(){var e=[];return e.push({field:"Key",width:300,sortable:!1}),e.push({field:"SourceText",width:300,sortable:!1,format:s(a=>(0,t.outerHtml)((0,t.Fluent)("a").addClass("source-text").text(a.value||"")),"format")}),e.push({field:"CustomText",width:300,sortable:!1,format:s(a=>(0,t.outerHtml)((0,t.Fluent)("input").addClass("custom-text").attr("value",a.value).attr("type","text").attr("data-key",a.item.Key)),"format")}),e.push({field:"TargetText",width:300,sortable:!1,format:s(a=>(0,t.outerHtml)((0,t.Fluent)("a").addClass("target-text").text(a.value||"")),"format")}),e}createToolbarExtensions(){super.createToolbarExtensions();let e={lookupKey:"Administration.Language"};this.sourceLanguage=t.Widget.create({type:t.LookupEditor,element:s(a=>a.appendTo(this.toolbar.element).attr("placeholder","--- "+(0,t.localText)("Db.Administration.Translation.SourceLanguage")+" ---"),"element"),options:e}),this.sourceLanguage.changeSelect2(a=>{this.hasChanges?this.saveChanges(this.targetLanguageKey).then(()=>this.refresh()):this.refresh()}),this.targetLanguage=t.Widget.create({type:t.LookupEditor,element:s(a=>a.appendTo(this.toolbar.element).attr("placeholder","--- "+(0,t.localText)("Db.Administration.Translation.TargetLanguage")+" ---"),"element"),options:e}),this.targetLanguage.changeSelect2(a=>{this.hasChanges?this.saveChanges(this.targetLanguageKey).then(()=>this.refresh()):this.refresh()})}saveChanges(e){var a={};for(let i of this.getItems())a[i.Key]=i.CustomText;return Promise.resolve(l.Update({TargetLanguageID:e,Translations:a})).then(()=>{this.hasChanges=!1,e=(0,t.trimToNull)(e)||"invariant",(0,t.notifySuccess)('User translations in "'+e+'" language are saved to "user.texts.'+e+'.json" file under "~/App_Data/texts/"',"")})}onViewSubmit(){var e=this.view.params;return e.SourceLanguageID=this.sourceLanguage.value,this.targetLanguageKey=this.targetLanguage.value||"",e.TargetLanguageID=this.targetLanguageKey,this.hasChanges=!1,super.onViewSubmit()}getButtons(){return[{title:(0,t.localText)("Db.Administration.Translation.SaveChangesButton"),onClick:s(e=>this.saveChanges(this.targetLanguageKey).then(()=>this.refresh()),"onClick"),cssClass:"apply-changes-button"}]}createQuickSearchInput(){t.GridUtils.addQuickSearchInputCustom(this.toolbar.element,(e,a)=>{this.searchText=a,this.view.setItems(this.view.getItems(),!0)})}onViewFilter(e){if(!super.onViewFilter(e))return!1;if(!this.searchText)return!0;var a=t.stripDiacritics,i=a(this.searchText).toLowerCase();function r(o){return o?o.toLowerCase().indexOf(i)>=0:!1}return s(r,"match"),(0,t.isEmptyOrNull)(i)||r(e.Key)||r(e.SourceText)||r(e.TargetText)||r(e.CustomText)}usePager(){return!1}};h=p(C),n=d(h,0,"TranslationGrid",T,n),s(n,"TranslationGrid"),c(h,1,n);var u=n;var S=s(()=>(0,v.gridPageInit)(u),"default");export{S as default};
//# sourceMappingURL=TranslationPage.js.map
