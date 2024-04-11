export const timestampNow = async() => {
    let date_timestamp = new Date()
    const timestampSeconds = Math.floor(date_timestamp.getTime() / 1000)
    return timestampSeconds;
}