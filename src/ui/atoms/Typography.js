import styled from 'styled-components';
const Typography = styled.p`
    color: #000000;
    font-size: 12px;
    -webkit-user-select: none;
    user-select: none;
`;
export default Typography;

export const Poppins = styled(Typography)`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    margin: 0;
    font-weight: 800;
`;
