using FluentMigrator;

namespace MultiTenancy.Migrations.DefaultDB;

[DefaultDB, MigrationKey(20221230_194100)]
public class DefaultDB_20221230_194100_MovieDB_MultiTenant
       : AutoReversingMigration
{
    public override void Up()
    {
        Alter.Table("Person")
            .AddColumn("TenantId").AsInt32()
                .NotNullable().WithDefaultValue(1);

        Alter.Table("Genre")
            .AddColumn("TenantId").AsInt32()
                .NotNullable().WithDefaultValue(1);

        Alter.Table("Movie")
            .AddColumn("TenantId").AsInt32()
                .NotNullable().WithDefaultValue(1);
    }
}
