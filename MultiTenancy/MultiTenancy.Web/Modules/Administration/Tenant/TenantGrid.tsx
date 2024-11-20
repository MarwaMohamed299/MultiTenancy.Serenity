import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { TenantDialog } from './TenantDialog';
import { TenantRow } from '../../ServerTypes/Modules/Administration.Tenant.TenantRow';
import { TenantColumns } from '../../ServerTypes/Modules/Administration.Tenant.TenantColumns';
import { TenantService } from '../../ServerTypes/Modules/Administration.Tenant.TenantService';

@Decorators.registerClass('MultiTenancy.Adminstration.TenantGrid')
export class TenantGrid extends EntityGrid<TenantRow> {
    protected getColumnsKey() { return TenantColumns.columnsKey; }
    protected getDialogType() { return TenantDialog; }
    protected getRowDefinition() { return TenantRow; }
    protected getService() { return TenantService.baseUrl; }
}