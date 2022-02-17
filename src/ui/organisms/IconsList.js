import React, { useEffect, useRef, useState } from "react";
import { FixedSizeGrid as Grid } from "react-window";
import styled from "styled-components";
import IcnThumbnail from "../atoms/IcnThumbnail";
import useWindowSize from "../../utils/use-window-size";
const IconsList = (props) => {
  const list = props.icons ? props.icons : [];
  const [columnCount, setColumnCount] = useState(0);
  const [rowCount, setRowCount] = useState(0);
  const minColumnWidth = 55;
  const [columnWidth, setColumnWidth] = useState(minColumnWidth);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const sizes = useWindowSize();
  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setWidth(document.getElementById("grid-container").offsetWidth);
      setHeight(sizes.height);
    }, 1000);
  }, [sizes.height, sizes.width]);
  useEffect(() => {
    const itemsPerRow = Math.floor((sizes.width - 40) / minColumnWidth);
    const colDifPx =
      ((sizes.width - 40) / minColumnWidth - itemsPerRow) * minColumnWidth;
    if (colDifPx > 0) {
      const plusColumWidth = Math.floor(colDifPx / itemsPerRow);
      setColumnWidth(minColumnWidth + plusColumWidth);
    }
    setColumnCount(itemsPerRow);
    setRowCount(Math.ceil(list.length / itemsPerRow));
  }, [props.icons, sizes.width]);
  const Cell = ({ columnIndex, rowIndex, style }) => {
    const image = list[rowIndex * columnCount + columnIndex];
    if (image) {
      return (
        <CellContainer
          key={image.id}
          style={{
            ...style,
          }}
        >
          <IcnThumbnail icon={image} />
        </CellContainer>
      );
    } else {
      return <div />;
    }
  };

  return (
    <Container id="grid-container" className="IconItemContainer" ref={ref}>
      <Grid
        style={{ overflowX: "hidden" }}
        columnCount={columnCount}
        columnWidth={columnWidth}
        height={height}
        rowCount={rowCount}
        rowHeight={70}
        width={width-20}
      >
        {Cell}
      </Grid>
    </Container>
  );
};
const CellContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 99%;
  /* flex: 1; */
  height: calc(100% - 40px);
  border-radius: 5px;
  background-color: #f3f7fb;
`;
export default IconsList;
