const registerUser = async (req, res) => {
    const body ="hello"
    const { name, email, password } = req.body;
    
    console.log(req.body)

    res.json({
       name,
       email
    })
}

export default registerUser;