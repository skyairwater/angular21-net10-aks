using Finance.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace Finance.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class StockSymbolController(IHttpClientFactory factory, IConfiguration configuration) : ControllerBase
{
    [HttpGet("GetAll")]
    public async Task<IEnumerable<StockDetail>?> GetAll()
    {
        var client = factory.CreateClient("get all stock symbols");

        var requestUriWithApiKey = $"https://financialdata.net/api/v1/stock-symbols?key={configuration.GetValue<string>("FinancialDataApiKey")}";

        return await client.GetFromJsonAsync<IEnumerable<StockDetail>>(requestUri: requestUriWithApiKey);         
    }

    [HttpGet("GetInternationalSymbols")]
    public async Task<IEnumerable<StockDetail>?> GetInternationalSymbols()
    {
        var client = factory.CreateClient("get international symbols");

        var requestUriWithApiKey = $"https://financialdata.net/api/v1/international-stock-symbols?key={configuration.GetValue<string>("FinancialDataApiKey")}";

        return await client.GetFromJsonAsync<IEnumerable<StockDetail>>(requestUri: requestUriWithApiKey);
    }

    [HttpGet("GetEtfSymbols")]
    public async Task<IEnumerable<StockDetail>?> GetEtfSymbols()
    {
        var client = factory.CreateClient("get Etf symbols");

        var requestUriWithApiKey = $"https://financialdata.net/api/v1/etf-symbols?key={configuration.GetValue<string>("FinancialDataApiKey")}";

        return await client.GetFromJsonAsync<IEnumerable<StockDetail>>(requestUri: requestUriWithApiKey);
    }

    [HttpGet("GetCommoditySymbols")]
    public async Task<IEnumerable<StockDetail>?> GetCommoditySymbols()
    {
        var client = factory.CreateClient("get commodity symbols");

        var requestUriWithApiKey = $"https://financialdata.net/api/v1/commodity-symbols?key={configuration.GetValue<string>("FinancialDataApiKey")}";

        return await client.GetFromJsonAsync<IEnumerable<StockDetail>>(requestUri: requestUriWithApiKey);
    }

    [HttpGet("GetOverTheCounterSymbols")]
    public async Task<IEnumerable<StockDetail>?> GetOverTheCounterSymbols()
    {
        var client = factory.CreateClient("get OTC symbols");

        var requestUriWithApiKey = $"https://financialdata.net/api/v1/commodity-symbols?key={configuration.GetValue<string>("FinancialDataApiKey")}";

        return await client.GetFromJsonAsync<IEnumerable<StockDetail>>(requestUri: requestUriWithApiKey);
    }
}
