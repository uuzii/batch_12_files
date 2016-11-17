var or1 = [0, 0.4];
var or2 = [1, 0.6];

function perfectCity(origin, destination){
  var x_origin_0 = 0.1;
  var x_origin_1 = 0.1;
  var x_destin_0 = 0.1;
  var x_destin_1 = 0.1;
  var y_origin_0 = 0.1;
  var y_origin_1 = 0.1;
  var y_destin_0 = 0.1;
  var y_destin_1 = 0.1;
  var dist = 0.1;
  var sum0 = 0.1;
  var sum1 = 0.1;
  var y = 0.1;
  var x = 0.1

  y = Math.abs(destination[1] - origin[1]);
  x = Math.abs(destination[0] - origin[0]);

  if (Math.ceil(Math.abs(destination[0])) == Math.ceil(Math.abs(origin[0]))) {
    x_origin_1 = Math.abs(Math.ceil(Math.abs(origin[0])) - Math.abs(origin[0]));
    x_origin_0 = Math.abs(1 - x_origin_1);
    x_destin_1 = Math.abs(Math.ceil(Math.abs(destination[0])) - Math.abs(destination[0]));
    x_destin_0 = Math.abs(1 - x_destin_1);
    sum0 = x_origin_0 + x_destin_0;
    sum1 = x_origin_1 + x_destin_1;
    if (sum0 < sum1) {
      dist = sum0 + y;
    }
    else if (sum1 < sum0) {
      dist = sum1 + y;
    }
    else if (sum1 == sum0) {
      dist = sum1 + y;
    }
    else {
      dist = 0;
    }
  }

  //-----------------------------------------------------------------------------------------
  else if (Math.ceil(Math.abs(destination[1])) == Math.ceil(Math.abs(origin[1]))) {
    y_origin_1 = Math.abs(Math.ceil(Math.abs(origin[1])) - Math.abs(origin[1]));
    y_origin_0 = Math.abs(1 - y_origin_1);
    y_destin_1 = Math.abs(Math.ceil(Math.abs(destination[1])) - Math.abs(destination[1]));
    y_destin_0 = Math.abs(1 - y_destin_1);
    sum0 = y_origin_0 + y_destin_0;
    sum1 = y_origin_1 + y_destin_1;
    if (sum0 < sum1) {
      dist = sum0 + x;
    }
    else if (sum1 < sum0) {
      dist = sum1 + x;
    }
    else if (sum1 == sum0) {
      dist = sum1 + x;
    }
    else {
      dist = 0;
    }
  }

  //-----------------------------------------------------------------------------------------
  else if (Math.ceil(Math.abs(destination[0])) > Math.ceil(Math.abs(origin[0]))) {
    dist = Math.abs(destination[0] - origin[0]) + y;
  }

  //-----------------------------------------------------------------------------------------
  else {
    dist = 0;
  }

  return dist;
}


console.log(perfectCity(or1, or2));
