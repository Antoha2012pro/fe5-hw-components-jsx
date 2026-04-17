import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    max-width: ${({ maxWidth }) => maxWidth === "lg"
        ? "1400px"
        : maxWidth === "md"
            ? "1150px"
            : "900px"};
    margin: 0px auto;
`;

export const ProfileStyled = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 26px;
    padding: 16px 0 0 0;
    margin: 0 auto;
    width: 100%;
    max-width: 260px;
    border: 1px solid gray;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
`;

export const ProfileDescriptionStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

export const ProfileDescriptionImgStyled = styled.img`
    margin: 0px auto 16px auto;
    width: 100px;
    background-color: gray;
    border-radius: 50%;
`;

export const ProfileDescriptionNameStyled = styled.p`
    font-size: 24px;
    font-weight: 700;
`;

export const ProfileDescriptionTagStyled = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: gray;
`;

export const ProfileDescriptionLocationStyled = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: gray;
`;


export const ProfileStatsStyled = styled.ul`
    display: flex;
    flex-direction: row;
    text-align: center;
    border-top: 1px solid gray;
`;

export const ProfileStatStyled = styled.li`
    position: relative;
    flex: 1;
    padding: 12px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:not(:last-child)::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 1px;
        height: 100%;
        background-color: #d3dbe3;
    }
`;

export const ProfileLabelStyled = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: gray;
`;

export const ProfileQuantityStyled = styled.span`
    font-size: 18px;
    font-weight: 700;
    color: black;
`;





export const StatiscticsStyled = styled.section`
    text-align: center;
    border: 1px solid gray;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
`;

export const StatiscticsTitleStyled = styled.h2`
    font-size: 26px;
    font-weight: 700;
    color: black;
    padding: 12px 0 12px 0;
`;

export const StatiscticsListStyled = styled.ul`
    display: flex;
    justify-content: space-between;
`;

export const StatiscticsItemStyled = styled.li`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    margin: 0 auto;
    padding: 6px 0 6px 0;
    background-color: #${({ bgColor }) => bgColor || "transparent"};
`;

export const StatiscticsItemLabelStyled = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: white;
`;

export const StatiscticsItemPercentageStyled = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: white;
`;




export const FriendListStyled = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 0 auto;
`;

export const FriendListItemStyled = styled.li`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    padding: 6px 6px 6px 6px;
    border: 1px solid gray;
    width: 100%;
    max-width: 200px;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
`;

export const FriendListItemStatusStyled = styled.span`
    background-color: ${({ isOnline }) => isOnline};
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
`;

export const FriendListItemAvatarStyled = styled.img`
    width: 64px;
    border-radius: 4px;
    background-color: #0000002a;
`;

export const FriendListItemNameStyled = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: black;
`;



// я мало працював з таблицями, тому мені допоміг чат гпт з цими стилями

export const TableWrapperStyled = styled.div`
    width: 100%;
    overflow-x: auto;
`;

export const TransactionHistoryStyled = styled.table`
    width: 100%;
    max-width: 880px;
    margin: 0 auto;
    border-collapse: separate;
    border-spacing: 0;
    overflow: hidden;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
    background-color: white;

    th {
        padding: 16px 24px;
        font-size: 20px;
        font-weight: 700;
        color: white;
        text-transform: uppercase;
        letter-spacing: 1px;
        text-align: center;
    }

    td {
        padding: 16px 24px;
        font-size: 18px;
        font-weight: 400;
        color: #7a7a7a;
        text-align: center;
    }

    th:not(:last-child),
    td:not(:last-child) {
        border-right: 1px solid #d9d9d9;
    } 

    tbody tr:nth-child(odd) {
        background-color: #f7f7f7;
    }

    tbody tr:nth-child(even) {
        background-color: #eef1f3;
    }

    tbody td:first-child {
        text-transform: capitalize;
    }
`;

export const TransactionHistoryTheadStyled = styled.thead`
    background-color: #18b7cf;
`;