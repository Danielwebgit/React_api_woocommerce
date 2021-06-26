import React ,{ useState }from 'react'
import { useDispatch } from 'react-redux'
import { authLogin } from '../../store/fetchActions'
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap'

export default function Login () {

const [ form,setForm ] = useState({username:'',password:''});
const dispatch = useDispatch();

function changeForm(e) {

    const { name, value } = e.target;
    setForm({...form,[name]:value})
}

function submitForm(e){
    e.preventDefault();
    dispatch(authLogin(form));
    setForm({username:'',password: ''});
}

    return (
        <>
            <div className="col-md-12">
                <hr  className="my-3"/>

                <Form style={{width:340, margin:'40px auto'}} onSubmit={submitForm}>
                    <FormGroup>
                        <Label for="username">Email</Label>
                        <Input type="username" onChange={changeForm} id="username" name="username"  placeholder="Inform seu e-mail" value={form.username} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Senha</Label>
                        <Input type="password" onChange={changeForm} id="password" name="password" placeholder="Inform a senha" value={form.password} />
                    </FormGroup>
                    <Button color="primary" block  > Entrar </Button>
                </Form>
            </div>
        </>
    )

}
