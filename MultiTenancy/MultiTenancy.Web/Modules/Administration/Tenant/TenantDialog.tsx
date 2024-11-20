import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { TenantRow } from '../../ServerTypes/Modules/Administration.Tenant.TenantRow';
import { TenantForm } from '../../ServerTypes/Modules/Administration.Tenant.TenantForm';
import { TenantService } from '../../ServerTypes/Modules/Administration.Tenant.TenantService';

@Decorators.registerClass('MultiTenancy.Adminstration.TenantDialog')
export class TenantDialog extends EntityDialog<TenantRow, any> {
    protected getFormKey() { return TenantForm.formKey; }
    protected getRowDefinition() { return TenantRow; }
    protected getService() { return TenantService.baseUrl; }

    protected form = new TenantForm(this.idPrefix);
}