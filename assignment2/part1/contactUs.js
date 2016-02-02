$("#contactUsForm").validate({
	rules:	{
		name:"required",
		email:{
			required:true,
			email:true
            },
		message: "required"
		},
		messages:
        {
            name: 
            {
                required: "Please enter stuff."
            },
            
            email:
            {
                required: "Please enter stuff.",
                email: "Please enter a valid email address"         
            },
            
            message:
            {
                required: "Please enter stuff."
            }
        }
		
})

