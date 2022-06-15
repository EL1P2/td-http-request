import "./App.css";
import {useState} from "react";
import axios from "axios";

function App (){
    let [result, setResult] = useState([]);
    return(
        <div>
            <button onClick={() => {
                const promise = axios({
                    method: 'get',
                    url: 'http://jsonplaceholder.typicode.com/posts'
                })
                promise.then((resp) =>{
                    console.log(resp);
                    setResult(resp.data);
                }).catch((error)=>{
                    console.log(error);
                })
            }}>
                Get Posts
            </button>
            <button onClick={()=>{
                const promise = axios({
                    method: 'put',
                    url: 'http://jsonplaceholder.typicode.com/posts/1',
                    data : {
                        title : 'Onitsiky',
                        body : 'RANAIVOSON'
                    }
                })
                promise.then((response)=>{
                    console.log(response);
                }).catch((error)=>{
                    console.error(error);
                })
            }}>Add Post</button>
            <button onClick={() => {
                const promise = axios({
                    method: 'put',
                    url: 'http://jsonplaceholder.typicode.com/posts/1',
                    data: {
                        title: 'DEUX',
                        body: 'Deux'
                    }
                })
                promise.then((res) => {
                    console.log(res);
                }).catch((err) =>{
                    console.error(err);
                })
            }}>Update Post</button>
            <button onClick={()=>{
                const promise = axios.delete('http://jsonplaceholder.typicode.com/posts/1');
                promise.then((res)=>{
                    console.log(res);
                }).catch((error) =>{
                    console.error(error);
                })
            }}>Delete Post</button>
            {result.length > 0 && (
                <table>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                    </thead>
                    <tbody>
                    {result.map((item) => (
                        <tr key={`${item.title}-${item.body}`}>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default App;