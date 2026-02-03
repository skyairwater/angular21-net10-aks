using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Finance.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class StockSymbols : ControllerBase
{
    public IEnumerable<(string tradingSymbol, string registrantName)>? Get()
    {
        return null;
    }
}
