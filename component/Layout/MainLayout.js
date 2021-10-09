import Header from '../UI/Header/Header'
import SideNav from '../UI/SideNav/SideNav';

const MainLayout = (props) => {
    return (
        <div style={{
            background: 'linear-gradient(97deg, rgba(2,0,36,1) 32%, rgba(155,0,226,1) 100%, rgba(76,9,121,1) 100%)',
            minHeight: '100vh',
        }}>
            <Header />
            <SideNav />
            <section className="content-container">
                {props.children}
            </section>

        </div >
    )
}

export default MainLayout;