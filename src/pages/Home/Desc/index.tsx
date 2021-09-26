import { Card, Descriptions, Badge } from 'antd'


export default function Desc() {
    return (
        <Card >
            <Descriptions title="Yifan's Info" bordered>
                <Descriptions.Item label="Name">Yifan(Ivan) Xu</Descriptions.Item>
                <Descriptions.Item label="Education">Monash University</Descriptions.Item>
                <Descriptions.Item label="Major">Master of IT</Descriptions.Item>
                <Descriptions.Item label="Language">English, Native Chinese</Descriptions.Item>
                <Descriptions.Item label="Graduation Date" span={2}>
                    Nov 2018
                </Descriptions.Item>
                <Descriptions.Item label="Status" span={3}>
                    <Badge status="processing" text="Looking for a frontend position" />
                </Descriptions.Item>
                <Descriptions.Item label="Skill sets">
                    HTML, CSS/Less, JavaScript/TypeScript
                    <br />
                    jQuery, React.js
                    <br />
                    Express and basic node.js
                    <br />
                    MongoDB and basic MySQL
                    <br />
                    WordPress
                </Descriptions.Item>
            </Descriptions>
        </Card>
    )
}
