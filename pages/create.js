import Head from 'next/head'
import { useStateContext } from '../component/HBOProvider'
import ls from 'local-storage'
import { v4 } from 'uuid'
import { useRouter } from 'next/dist/client/router';

export default function createUser() {
    const globalState = useStateContext();
    const router = useRouter();
    const saveUser = () => {
        let users = [],
            user;
        if (ls('users') < 1) {
            user = {
                id: v4(),
                user: globalState.user,
                myListID: []
            }
            users.push(user)
            ls('users', users)
        } else {
            users = ls('users')
            user = {
                id: v4(),
                user: globalState.user,
                myListID: []
            }
            users.push(user)
            ls('users', users)
            router.push('/login')
        }

    }
    return (
        <div>
            <div className="create-user">
                <div className="create-user__top">
                    <div className="create-user__logo" />
                    <span className="create-user__title">
                        Who Is Watching?
                    </span>
                </div>

                <div className="create-user__form">
                    <img className="create-user__user-img" src={globalState.defaultUserImage} />
                    <div className="create-user__input-group">
                        <label>Name</label>
                        <input value={globalState.user} onChange={globalState.createUserAction} type="text" className="create-user__input-text"></input>
                        <div className="create-user__colors">
                            <div className="create-user__color create-user__color--active" style={{
                                background: 'rgb(2,0,36)',
                                background: 'linear-gradient(97deg, rgba(2,0,36,1) 32%, rgba(155,0,226,1) 100%, rgba(76,9,121,1) 100%)',
                            }} />
                            <div className="create-user__color" style={{
                                background: 'rgb(131,58,180)',
                                background: 'linear-gradient(97deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
                            }} />
                            <div className="create-user__color" style={{
                                background: 'rgb(2,0,36)',
                                background: 'linear-gradient(97deg, rgba(2,0,36,1) 32%, rgba(155,0,226,1) 100%, rgba(76,9,121,1) 100%)',
                            }} />
                            <div className="create-user__color" style={{
                                background: 'rgb(34,193,195)',
                                background: 'linear-gradient(97deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
                            }} />
                            <div className="create-user__color" style={{
                                background: 'rgb(2,0,36)',
                                background: 'linear-gradient(97deg, rgba(2,0,36,1) 32%, rgba(155,0,226,1) 100%, rgba(76,9,121,1) 100%)',
                            }} />
                        </div>
                    </div>
                </div>

                <div className="create-user__buttons">
                    <button className="create-user__cancel">Cancel</button>
                    <button className="create-user__save">Save</button>
                </div>
            </div>
        </div>
    )
}
