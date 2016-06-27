/**
 * Created by user on 6/27/2016.
 */
hrApp.service("UserService", function() {
    return {
        saveData: function(firstName, lastName, id) {
            data = {
                firstName: firstName,
                lastName: lastName,
                id: id
            };
            window.alert("Data has been saved!");
            return data;
        }
    }
})