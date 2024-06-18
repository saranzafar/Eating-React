const conf = {
    databaseUrl: String(`https://survey-app-backend-liard.vercel.app/api/v1/`)
    // databaseUrl: String(import.meta.env.URL || "https://survey-app-backend-liard.vercel.app/")
}
console.log("ulr =",conf.databaseUrl);

export default conf