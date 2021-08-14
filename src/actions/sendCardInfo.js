export function sendCardInfo(entries) {
    return () => {
      fetch(`http://localhost:3001/api/v1/players`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(entries)
        })
        .then(res => res.json())
      };
    }