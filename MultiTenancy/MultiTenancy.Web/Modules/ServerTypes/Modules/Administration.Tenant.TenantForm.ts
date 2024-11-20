import { StringEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface TenantForm {
    TenantName: StringEditor;
}

export class TenantForm extends PrefixedContext {
    static readonly formKey = 'Adminstration.Tenant';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!TenantForm.init)  {
            TenantForm.init = true;

            var w0 = StringEditor;

            initFormType(TenantForm, [
                'TenantName', w0
            ]);
        }
    }
}