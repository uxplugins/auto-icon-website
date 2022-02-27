import React, { memo, useEffect, useRef, useState } from "react";
import { useAtom } from "jotai";
import { FixedSizeGrid as Grid, areEqual } from "react-window";
import styled from "styled-components";
import IcnThumbnail from "../atoms/IcnThumbnail";
import useWindowSize from "../../utils/use-window-size";
import { IconListAtom } from "../../Store/filter";
const IconsList = () => {
  const [icons] = useAtom(IconListAtom);
  // const list = icons ? icons : [];
  const [columnCount, setColumnCount] = useState(0);
  const [rowCount, setRowCount] = useState(0);
  const minColumnWidth = 110;
  const [columnWidth, setColumnWidth] = useState(minColumnWidth);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const sizes = useWindowSize();
  const ref = useRef(null);

  useEffect(() => {
    const itemsPerRow = Math.floor((width - 20) / minColumnWidth);
    const colDifPx =
      ((width - 20) / minColumnWidth - itemsPerRow) * minColumnWidth;
    if (colDifPx > 0) {
      const plusColumWidth = Math.floor(colDifPx / itemsPerRow);
      setColumnWidth(minColumnWidth + plusColumWidth);
    }
    setColumnCount(itemsPerRow);
    setRowCount(Math.ceil(icons.length / itemsPerRow));
  }, [icons, sizes.width, width]);
  useEffect(() => {
    setTimeout(() => {
      setWidth(document.getElementById("grid-container").offsetWidth);
      setHeight(sizes.height);
    }, 500);
  }, [sizes.height, sizes.width]);
  const Cell = memo(({ columnIndex, rowIndex, style }) => {
    const image = icons[rowIndex * columnCount + columnIndex];
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
  }, areEqual);

  return (
    <Container id="grid-container" className="IconItemContainer" ref={ref}>
      <Grid
        style={{ overflowX: "hidden" }}
        // itemData={itemData}
        columnCount={columnCount}
        columnWidth={columnWidth}
        height={height - 105}
        rowCount={rowCount}
        rowHeight={120}
        width={width}
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
  width: 100%;
  height: calc(100% - 40px);
  border-radius: 5px;
`;
export default IconsList;
