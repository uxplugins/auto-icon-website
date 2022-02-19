import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { Input, InputGroup } from "rsuite";
import styled from "styled-components";
import { SearchAtom } from "../../Store/search";
import { Close } from "auto-icon-react/Material Design Icons";
const SearchInput = () => {
  const [search, setSearch] = useAtom(SearchAtom);
  const [clear, setClear] = useState(false);
  useEffect(() => clear && setSearch(""), [clear]);
  const handleSearchChange = (e) => {
    setSearch(e);
    setClear(false);
  };
  return (
    <Container className="Search_Container">
      <InpGroup inside>
        <Inp
          placeholder="Search Icon"
          value={search}
          onChange={handleSearchChange}
        />
        {search !== "" && search.length > 0 && (
          <InputGroup.Button onClick={() => setClear(true)}>
            <IcnClose />
          </InputGroup.Button>
        )}
      </InpGroup>
    </Container>
  );
};
const Container = styled.div`
  width: 300px;
  margin: 26px 0;
  padding-left: 25px;
`;

const InpGroup = styled(InputGroup)`
  width: 400px;
`;

const Inp = styled(Input)`
  padding: 10px;
`;

const IcnClose = styled(Close)`
  color: #b2b2b2;
  width: 15px;
`;
export default SearchInput;
