var db;

<!-- create and onpening a Database -->
db = window.openDatabase('DBName', '1.0', 'description', 5*1024*1024, function(database){
	alert('created')
}); //5MB

<!-- create table -->
db.transaction(function(tx) {
	tx.executeSql("CREATE TABLE Employee (id REAL UNIQUE, text TEXT)", [],
		function(tx) {  
			log.innerHTML = '<p>"Employee" created!</p>' },onError);
		}
	);
}


db.transaction(function(tx) {
							  tx.executeSql("CREATE TABLE Employee (id REAL UNIQUE, text TEXT)", [],
								  function(tx) {  log.innerHTML = '<p>"Employee" created!</p>' },
								  onError);
							});

<!-- show all records and display them -->
db.transaction(function(tx){
  tx.executeSql("SELECT * FROM Employee", {}, function(tx, data){
    var result = [];
    for(var i=0;i<data.rows.length; i++){
      result.push(data.rows.item(i))
    }
    console.table(result)
  })
})