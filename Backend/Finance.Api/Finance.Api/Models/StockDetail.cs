using System.Text.Json.Serialization;

namespace Finance.Api.Models;

public class StockDetail
{
    [JsonPropertyName("trading_symbol")]
    public string TradingSymbol { get; set; } = string.Empty;

    [JsonPropertyName("registrant_name")]
    public string RegistrantName { get; set; } = string.Empty;

    [JsonPropertyName("description")]
    public string Description { get; set; } = string.Empty;

    [JsonPropertyName("title_of_security")]
    public string SecurityTitle { get; set; } = string.Empty;
}
