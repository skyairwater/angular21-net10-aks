using Finance.Api.Models;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.CompilerServices;

namespace Finance.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class StockSymbolController(IHttpClientFactory factory, IConfiguration configuration) : ControllerBase
{
    private readonly string? apiKey = configuration["FinancialData:ApiKey"];
    private readonly HttpClient client = factory.CreateClient("get stock symbols");
    
    [HttpGet("GetAll")]
    public async Task<IActionResult> GetAll()
    {   
        if (string.IsNullOrWhiteSpace(apiKey))
            return Problem("FinancialData API key is missing. Set FinancialData:ApiKey.", statusCode: 500);

        var result = await client.GetFromJsonAsync<IEnumerable<StockDetail>>(requestUri: $"https://financialdata.net/api/v1/stock-symbols?key={apiKey}");         

        return Ok(result);
    }

    [HttpGet("GetInternationalSymbols")]
    public async Task<IActionResult> GetInternationalSymbols()
    {
        if (string.IsNullOrWhiteSpace(apiKey))
            return Problem("FinancialData API key is missing. Set FinancialData:ApiKey.", statusCode: 500);

        var result = await client.GetFromJsonAsync<IEnumerable<StockDetail>>(requestUri: $"https://financialdata.net/api/v1/international-stock-symbols?key={apiKey}");

        return Ok(result);
    }

    [HttpGet("GetEtfSymbols")]
    public async Task<IActionResult> GetEtfSymbols()
    {
        var result = await client.GetFromJsonAsync<IEnumerable<StockDetail>>(requestUri: $"https://financialdata.net/api/v1/etf-symbols?key={apiKey}");

        return Ok(result);
    }

    [HttpGet("GetCommoditySymbols")]
    public async Task<IActionResult> GetCommoditySymbols()
    {
        var result = await client.GetFromJsonAsync<IEnumerable<StockDetail>>(requestUri: $"https://financialdata.net/api/v1/commodity-symbols?key={apiKey}");

        return Ok(result);
    }

    [HttpGet("GetOverTheCounterSymbols")]
    public async Task<IActionResult> GetOverTheCounterSymbols()
    {
        var result = await client.GetFromJsonAsync<IEnumerable<StockDetail>>(requestUri: $"https://financialdata.net/api/v1/commodity-symbols?key={apiKey}");
        
        return Ok(result);
    }
}
