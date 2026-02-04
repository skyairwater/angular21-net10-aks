var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddOpenApi();
builder.Services.AddHttpClient();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular", policy =>
        policy.WithOrigins("http://localhost:4200")
              .AllowAnyHeader()
              .AllowAnyMethod());
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    //Why: In Docker we’ll run HTTP only, so HTTPS redirection would break requests.
    app.UseHttpsRedirection();
    app.MapOpenApi();
}



app.UseAuthorization();

app.UseCors("AllowAngular");

app.MapControllers();

app.Run();
