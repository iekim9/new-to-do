//function addZero(var change)
//{
//  var after = '0' + change.toString();
//  return after;
//}

function update()
{
  var d = new Date();
  var allDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


  // day month date year
  var day = allDays[d.getDay()];
  var month = allMonths[d.getMonth()];
  var date = d.getDate();
  if ( date < 10 )
  {
    date = '0' + date;
  }
  var year = d.getFullYear();
  document.getElementById("date").innerHTML = day + ", " + month + " " + date + ", " + year + ".";


// hour minute second
  var hour = d.getHours();
  var minute = d.getMinutes();
  if ( minute < 10 )
  {
    minute = '0' + minute;
  }
  var second = d.getSeconds();
  if ( second < 10 )
  {
    second = '0' + second;
  }

  // am/pm difference
  if ( d.getHours() < 13 )
  {
    if ( hour < 10 )
    {
      hour = '0' + hour;
    }
    document.getElementById("time").innerHTML = hour + ":" + minute + ":" + second + " am.";
  }
  else
  {
    hour = Math.abs( hour - 12 );
    if ( hour < 10 )
    {
      hour = '0' + hour;
    }
    document.getElementById("time").innerHTML = hour + ":" + minute + ":" + second + " pm.";
  }


  setTimeout(update, 100);
}
update();
