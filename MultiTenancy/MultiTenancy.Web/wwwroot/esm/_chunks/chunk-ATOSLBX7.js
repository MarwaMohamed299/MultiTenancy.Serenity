import{a as g,c as p}from"./chunk-GECC5FV5.js";import{c as u,f as w,g as f,h as I,i as G,j as b}from"./chunk-7V7WNOD5.js";var d;(e=>{let y;(i=>(i.ImplicitPermissions="Administration.ImplicitPermissions",i.PermissionKeys="Administration.PermissionKeys"))(y=e.Administration||(e.Administration={})),e.UserData="UserData"})(d||(d={}));var n=w(b(),1);var k,P,S;k=[n.Decorators.registerEditor("MultiTenancy.Administration.PermissionCheckEditor",[n.IGetEditValue,n.ISetEditValue])];var h=class h extends(S=n.DataGrid){constructor(e){super(e);this.rolePermSet=new Set;this.implicitSets={};let t={};this.getSortedGroupAndPermissionKeys(t,s=>{if(!this.domNode)return;let i=s.map(r=>({Key:r,ParentKey:this.getParentKey(r),Title:t[r],GrantRevoke:null,IsGroup:r.charAt(r.length-1)===":"}));this.byParentKey=(0,n.toGrouping)(i,r=>r.ParentKey),this.setItems(i),this.value=this._value}),this.options.value&&(typeof this.options.value[0]=="string"?this.valueAsStrings=this.options.value:this.value=this.options.value),this.implicitPermissions=e.implicitPermissions,this.rolePermissions=e.rolePermissions}getIdProperty(){return"Key"}getItemGrantRevokeClass(e,t){if(!e.IsGroup)return e.GrantRevoke===t?" checked":"";let s=this.getDescendants(e,!0),i=s.filter(r=>r.GrantRevoke===t);return i.length?s.length===i.length?"checked":"partial":""}hasByRoleOrImplicitly(e){return this.rolePermSet.has(e)||Object.entries(this.implicitSets).some(([t,s])=>{var i;return s.has(e)&&(this.rolePermSet.has(t)||((i=this.view.getItemById(t))==null?void 0:i.GrantRevoke))})}getItemEffectiveClass(e){if(e.IsGroup){let t=this.getDescendants(e,!0),s=(0,n.count)(t,i=>i.GrantRevoke===!0||i.GrantRevoke==null&&this.hasByRoleOrImplicitly(i.Key));return s===t.length||t.length===0?"allow":s===0?"deny":"partial"}return e.GrantRevoke===!0||e.GrantRevoke==null&&this.hasByRoleOrImplicitly(e.Key)?"allow":"deny"}getColumns(){let e=[{name:g.Site.UserPermissionDialog.Permission,field:"Title",format:n.SlickFormatting.treeToggle(()=>this.view,t=>t.Key,t=>p("span",{class:["effective-permission",this.getItemEffectiveClass(t.item)],children:t.value})),width:495,sortable:!1},{name:g.Site.UserPermissionDialog.Grant,field:"Grant",format:u(t=>p("span",{class:["check-box grant no-float ",this.getItemGrantRevokeClass(t.item,!0)]}),"format"),width:65,sortable:!1,headerCssClass:"align-center",cssClass:"align-center"}];return this.options.showRevoke&&e.push({name:g.Site.UserPermissionDialog.Revoke,field:"Revoke",format:u(t=>p("span",{class:["check-box revoke no-float",this.getItemGrantRevokeClass(t.item,!1)]}),"format"),width:65,sortable:!1,headerCssClass:"align-center",cssClass:"align-center"}),e}setItems(e){n.SlickTreeHelper.setIndents(e,t=>t.Key,t=>t.ParentKey,!1),this.view.setItems(e,!0)}onViewSubmit(){return!1}onViewFilter(e){return super.onViewFilter(e)&&n.SlickTreeHelper.filterById(e,this.view,t=>t.ParentKey)&&(!this.searchText||this.matchContains(e)||e.IsGroup&&this.getDescendants(e,!1).some(t=>this.matchContains(t)))}matchContains(e){return(0,n.stripDiacritics)(e.Title||"").toLowerCase().indexOf(this.searchText)>=0}getDescendants(e,t){let s=[],i=[e];for(;i.length>0;){let r=i.pop(),a=this.byParentKey[r.Key];if(a)for(let o of a)(!t||!o.IsGroup)&&s.push(o),i.push(o)}return s}onClick(e,t,s){if(super.onClick(e,t,s),n.Fluent.isDefaultPrevented(e)||n.SlickTreeHelper.toggleClick(e,t,s,this.view,a=>a.Key),n.Fluent.isDefaultPrevented(e))return;let i=(0,n.Fluent)(e.target),r=i.hasClass("grant");if(r||i.hasClass("revoke")){e.preventDefault();let a=this.itemAt(t),o=i.hasClass("checked")||i.hasClass("partial");r=o?null:r!==o,a.IsGroup?this.getDescendants(a,!0).forEach(l=>l.GrantRevoke=r):a.GrantRevoke=r,this.slickGrid.invalidate()}}getParentKey(e){e.charAt(e.length-1)===":"&&(e=e.substring(0,e.length-1));let t=e.lastIndexOf(":");return t>=0?e.substring(0,t+1):null}getButtons(){return[]}createToolbarExtensions(){super.createToolbarExtensions(),n.GridUtils.addQuickSearchInputCustom(this.toolbar.domNode,(e,t)=>{var s;this.searchText=(0,n.stripDiacritics)((s=t==null?void 0:t.trim())!=null?s:"").toLowerCase(),this.view.setItems(this.view.getItems(),!0)})}getSortedGroupAndPermissionKeys(e,t){(0,n.getRemoteDataAsync)(d.Administration.PermissionKeys).then(s=>{var a;let i={};for(var r of s.filter(o=>o)){if(r.charAt(r.length-1)==":"&&(r=r.substring(0,r.length-1),r.length===0)||e[r])continue;e[r]=(a=(0,n.tryGetText)("Permission."+r))!=null?a:r;let o=r.split(":"),l="",c="";for(let m=0;m<o.length-1;m++){l=l+o[m]+":";let v=(0,n.tryGetText)("Permission."+l);v==null&&(v=o[m]),e[l]=v,c=c+e[l]+":",i[l]=c}i[r]=c+e[r]}s=Object.keys(e),s=s.sort((o,l)=>(0,n.turkishLocaleCompare)(i[o],i[l])),t(s)})}get value(){return this.view.getItems().length?this.view.getItems().filter(e=>e.GrantRevoke!=null&&e.Key.charAt(e.Key.length-1)!=":").map(e=>({PermissionKey:e.Key,Granted:e.GrantRevoke})):(this._value||[]).map(e=>({PermissionKey:e.PermissionKey,Granted:e.Granted}))}set value(e){var t;this._value=e||[],this.view.getItems().forEach(s=>{s.GrantRevoke=null});for(let s of this._value){let i=this.view.getItemById(s.PermissionKey);i&&(i.GrantRevoke=(t=s.Granted)!=null?t:!0)}this.setItems(this.getItems())}get valueAsStrings(){return this.value.map(e=>e.PermissionKey)}set valueAsStrings(e){this.value=(e||[]).map(t=>({PermissionKey:t}))}get rolePermissions(){return Array.from(this.rolePermSet.values())}set rolePermissions(e){this.rolePermSet=new Set,e==null||e.forEach(t=>this.rolePermSet.add(t))}set implicitPermissions(e){this.implicitSets={},Object.entries(e||{}).forEach(([t,s])=>s==null?void 0:s.forEach(i=>{var r;return((r=this.implicitSets)[t]||(r[t]=new Set)).add(i)}))}};P=f(S),h=G(P,0,"PermissionCheckEditor",k,h),u(h,"PermissionCheckEditor"),I(P,1,h);var C=h;export{d as a,C as b};
//# sourceMappingURL=chunk-ATOSLBX7.js.map
