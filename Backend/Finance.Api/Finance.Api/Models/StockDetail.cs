using System.Text.Json.Serialization;

namespace Finance.Api.Models;

public class StockDetail
{
    [JsonPropertyName("trading_symbol")]
    public string TradingSymbol { get; set; } = string.Empty;

    [JsonPropertyName("registrant_name")]
    public string RegistrantName { get; set; } = string.Empty;
}
