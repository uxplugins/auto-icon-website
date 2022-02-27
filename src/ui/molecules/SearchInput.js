import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { Input, InputGroup } from "rsuite";
import styled from "styled-components";
import { SearchAtom } from "../../Store/search";
import { Close } from "auto-icon-react/Material Design Icons";
import { Search } from "auto-icon-react/Bootstrap Icons";
const SearchInput = () => {
  const [search, setSearch] = useAtom(SearchAtom);
  const [clear, setClear] = useState(false);
  useEffect(() => clear && setSearch(""), [clear]);
  const handleSearchChange = (e) => {
    setSearch(e);
    setClear(false);
  };
  return (
    <Container id="search-container" className="Search_Container">
      <InpGroup inside>
        <InputGroup.Button>
          <IcnSearch />
        </InputGroup.Button>
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
  width: 40%;
  margin-bottom: 26px;
  padding-left: 25px;
`;

const InpGroup = styled(InputGroup)`
  width: 60%;
`;

const Inp = styled(Input)`
  padding: 15px;
`;

const IcnClose = styled(Close)`
  color: #b2b2b2;
  width: 15px;
  cursor: pointer;
`;
const IcnSearch = styled(Search)`
  color: #b2b2b2;
  width: 15px;
`;
export default SearchInput;
