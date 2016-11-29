Code deployed at : http://www.flightbooking-151019.appspot.com/#/home

Brief :
Here, we want to implement Flight search functionality. You have a form, where user can input
and search for the flights. Then user will be able to see the search results, user can refine the
search using a slider for prices.

Technology:
AngularJs
Jquery
NodeJS
HTML5
CSS

Total HTML pages : 5 (including index.html)

Guide to use application:
install dependency presents inside app folder using command:

npm install

this command will install all dependency to host application at node server
then run same command inside public folder.

Application flow:
After hosting this application, by default user will landed to home page, where he can see flight details form.
He can enter flight details like source destination, date, no of passengers according to his requirement and sudmit to see result in the form of flight lists.

After getting this details he can also play with slider to change fare according to his requitement.

Also he can go for return ticket, where he will see total fare of round trip.

Application structure:

HTML location:
app\public\partials

CSS location:
app\public\css

application js location (including, controller, directive, services, filter, factory):
app\public\js

images:
app\public\images

Note:
Json list is presents at app\public\json\flightList.json
Json is taking dates starting from 26 july 2016. here is a json list

{
	"flightinfo": [
		{
			"to": "Pune",
			"from": "Mumbai",
			"fare": "3000",
			"flightcode": "a101",
			"depart": "12:00",
			"arrival": "14:00",
			"date": "27/07/2016"
		},
		{
			"to": "Pune",
			"from": "Mumbai",
			"fare": "4000",
			"flightcode": "a101",
			"depart": "12:00",
			"arrival": "14:00",
			"date": "27/07/2016"
		},
		{
			"to": "Mumbai",
			"from": "Pune",
			"fare": "4000",
			"flightcode": "AB101",
			"depart": "18:00",
			"arrival": "20:00",
			"date": "28/07/2016"
		},
		{
			"to": "Pune",
			"from": "Mumbai",
			"fare": "8000",
			"flightcode": "a101",
			"depart": "12:00",
			"arrival": "14:00",
			"date": "27/07/2016"
		},
		{
			"to": "Banglore",
			"from": "Delhi",
			"fare": "5000",
			"flightcode": "a1021",
			"depart": "5:00",
			"arrival": "7:00",
			"date": "05/08/2016"
		},
		{
			"to": "Delhi",
			"from": "Banglore",
			"fare": "6000",
			"flightcode": "B1021",
			"depart": "15:00",
			"arrival": "17:30",
			"date": "25/08/2016"
		},
		{
			"to": "Chennai",
			"from": "Pune",
			"fare": "8000",
			"flightcode": "a1021",
			"depart": "14:00",
			"arrival": "16:00",
			"date": "14/08/2016"
		},
		{
			"to": "Chennai",
			"from": "Delhi",
			"fare": "4500",
			"flightcode": "Z1021",
			"depart": "12:00",
			"arrival": "14:00",
			"date": "14/08/2016"
		},
		{
			"to": "Banglore",
			"from": "Pune",
			"fare": "3600",
			"flightcode": "Zs01",
			"depart": "12:00",
			"arrival": "14:00",
			"date": "29/07/2016"
		},
		{
			"to": "Delhi",
			"from": "Pune",
			"fare": "4000",
			"flightcode": "Re01",
			"depart": "12:00",
			"arrival": "14:00",
			"date": "30/07/2016"
		},
		{
			"to": "Mumbai",
			"from": "Pune",
			"fare": "4000",
			"flightcode": "ATR01",
			"depart": "18:00",
			"arrival": "20:00",
			"date": "01/08/2016"
		},
		{
			"to": "Banglore",
			"from": "Chennai",
			"fare": "8000",
			"flightcode": "QW01",
			"depart": "12:00",
			"arrival": "14:00",
			"date": "27/07/2016"
		},
		{
			"to": "Banglore",
			"from": "Delhi",
			"fare": "5000",
			"flightcode": "a1021",
			"depart": "5:00",
			"arrival": "7:00",
			"date": "05/08/2016"
		},
		{
			"to": "Delhi",
			"from": "Kolkata",
			"fare": "6500",
			"flightcode": "B1021",
			"depart": "15:00",
			"arrival": "17:30",
			"date": "29/08/2016"
		},
		{
			"to": "Chennai",
			"from": "Pune",
			"fare": "8000",
			"flightcode": "a1021",
			"depart": "14:00",
			"arrival": "16:00",
			"date": "30/08/2016"
		},
		{
			"to": "Chennai",
			"from": "Kolkata",
			"fare": "4500",
			"flightcode": "Z1021",
			"depart": "12:00",
			"arrival": "14:00",
			"date": "29/08/2016"
		},
		{
			"to": "Banglore",
			"from": "Pune",
			"fare": "3600",
			"flightcode": "Zs01",
			"depart": "12:00",
			"arrival": "14:00",
			"date": "30/07/2016"
		},
		{
			"to": "Delhi",
			"from": "Pune",
			"fare": "4000",
			"flightcode": "Re01",
			"depart": "12:00",
			"arrival": "14:00",
			"date": "31/07/2016"
		},
		{
			"to": "Mumbai",
			"from": "Pune",
			"fare": "4000",
			"flightcode": "ATR01",
			"depart": "18:00",
			"arrival": "20:00",
			"date": "02/08/2016"
		},
		{
			"to": "Banglore",
			"from": "Chennai",
			"fare": "8000",
			"flightcode": "QW01",
			"depart": "12:00",
			"arrival": "14:00",
			"date": "15/08/2016"
		},
		{
			"to": "Banglore",
			"from": "Delhi",
			"fare": "5000",
			"flightcode": "a1021",
			"depart": "5:00",
			"arrival": "7:00",
			"date": "06/08/2016"
		},
		{
			"to": "Delhi",
			"from": "Kolkata",
			"fare": "6500",
			"flightcode": "B1021",
			"depart": "15:00",
			"arrival": "17:30",
			"date": "08/08/2016"
		},
		{
			"to": "Chennai",
			"from": "Pune",
			"fare": "8000",
			"flightcode": "a1021",
			"depart": "14:00",
			"arrival": "16:00",
			"date": "05/08/2016"
		},
		{
			"to": "Chennai",
			"from": "Kolkata",
			"fare": "4500",
			"flightcode": "Z1021",
			"depart": "12:00",
			"arrival": "14:00",
			"date": "19/08/2016"
		}
	]
}
