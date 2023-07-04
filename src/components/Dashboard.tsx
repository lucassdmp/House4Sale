import { Container, Tab, Tabs } from "react-bootstrap";
import HouseForm from "./HouseForm";
import HouseEditList from "./HouseEditList";

function Dashboard() {
    return (
        <Container className="text-center">
            <h1>Dashboard</h1>
            <Tabs
                defaultActiveKey="addHouse"
                id="tabs-admin"
                className="TabsAdm"
                variant="underline"
                fill
            >
                <Tab eventKey="addHouse" title="Add House">
                    <HouseForm />
                </Tab>
                <Tab eventKey="delHouse" title="Edit or Delete House">
                    <HouseEditList/>
                </Tab>
            </Tabs>
        </Container>
    );
}

export default Dashboard;