function getProvince($city){

	switch($city.toLowerCase()){

		case "calgary":
		case "edmonton":
	    	return "Alberta";

		case "vancouver":
		case "victoria":
		case "abbotsford":
		case "kelowna":
		case "mission":
	    	return "British Columbia";

		case "winnipeg":
	    	return "Manitoba";

		case "moncton":
		case "saint john":
		case "fredericton":
	    	return "New Brunswick";

		case "st. john's":
		case "saint john's":
	    	return "Newfoundland";

		case "halifax":
		case "dartmouth":
		case "sydney":
		    return "Nova Scotia";

		case "toronto":
		case "ottawa":
		case "hamilton":
		case "kitchener":
		case "cambridge":
		case "waterloo":
		case "london":
		case "catharines":
		case "niagara":
		case "oshawa":
		case "windsor":
		case "sudbury":
		case "kingston":
		case "guelph":
		case "brantford":
		case "thunder":
		case "peterborough":
		    return "Ontario";

		case "montréal":
		case "montreal":
		case "gatineau":
		case "québec":
		case "quebec":
		case "sherbrooke":
		case "saguenay":
		case "trois":
		    return "Quebec";

		case "saskatoon":
		case "regina":
	    	return "Saskatchewan";
		
		default:
		    return null;

	}

}