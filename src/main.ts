export function main(job: any) {
    const jobString = JSON.stringify(job)
    console.log(`Received job: ${jobString}`)
}
