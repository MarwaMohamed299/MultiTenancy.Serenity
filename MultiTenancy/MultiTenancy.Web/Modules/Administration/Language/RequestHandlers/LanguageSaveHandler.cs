using MyRequest = Serenity.Services.SaveRequest<MultiTenancy.Administration.LanguageRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = MultiTenancy.Administration.LanguageRow;


namespace MultiTenancy.Administration;
public interface ILanguageSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }
public class LanguageSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILanguageSaveHandler
{
    public LanguageSaveHandler(IRequestContext context)
         : base(context)
    {
    }
}