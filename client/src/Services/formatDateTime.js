export const formatDateTime= (timestamp) =>{
    const now = new Date();
    const date = new Date(timestamp);
    const diffInSeconds = Math.floor((now - date) / 1000);

    const timeUnits = [
        { label: 'w', seconds: 60 * 60 * 24 * 7 }, // Weeks
        { label: 'd', seconds: 60 * 60 * 24 },    // Days
        { label: 'h', seconds: 60 * 60 },          // Hours
        { label: 'm', seconds: 60 },               // Minutes
        { label: 's', seconds: 1 }                 // Seconds
    ];

    for (const unit of timeUnits) {
        const value = Math.floor(diffInSeconds / unit.seconds);
        if (value >= 1) {
            return `${value}${unit.label}`;
        }
    }

    return 'just now'; // For very recent timestamps
}

export const formatMessageTime = function (timestamp) {
    var hours = timestamp.getHours();
    var minutes = timestamp.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
  
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    return hours + ':' + minutes + ampm;
}
