using Finance.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace Finance.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class StockSymbolController(IHttpClientFactory factory, IConfiguration configuration) : ControllerBase
{
    public async Task<IEnumerable<StockDetail>?> Get()
    {
        var client = factory.CreateClient("get all stock symbols");

        var requestUriWithApiKey = $"https://financialdata.net/api/v1/stock-symbols?key={configuration.GetValue<string>("FinancialDataApiKey")}";

        return await client.GetFromJsonAsync<IEnumerable<StockDetail>>(requestUri: requestUriWithApiKey);         
    }
}
