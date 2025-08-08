# Imagen base para runtime
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80

# Imagen para build
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY . .
WORKDIR /src/WebEscuelaJson

# Restaurar dependencias
RUN dotnet restore

# Compilar y publicar
RUN dotnet publish -c Release -o /app/publish

# Imagen final
FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .

# Comando para ejecutar la app
ENTRYPOINT ["dotnet", "WebEscuelaJson.dll"]
