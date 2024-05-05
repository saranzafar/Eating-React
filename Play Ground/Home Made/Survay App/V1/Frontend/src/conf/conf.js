const conf = {
    databaseUrl: String(import.meta.env.URL || "http://localhost:8000/api/v1/")
}
console.log("URL", conf.databaseUrl);

export default conf