const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '29d0bd4b11msh33f8793bf791fcap1bb788jsn1625f6f7de22',
		'X-RapidAPI-Host': 'world-clock.p.rapidapi.com'
	}
};;

export class TimeService {
  private abortController = new AbortController();

  getCurrentTime = async () => {
    const response = await fetch(
      'https://world-clock.p.rapidapi.com/json/utc/now',
      OPTIONS,
    );
    const json = await response.json();
    return new Date(json.currentDateTime);
  }
}
