/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useState } from "react";
import {
  BoxSize,
  BreakLine,
  LittleBreakLine,
  Parag,
} from "../../../Styles/styles";

import { capitalizeFirstLetter } from "../../../Utils/upperCase";
import OffsetCard from "../../../Components/Cards/Offsets/OffsetCard";
import { isObjEmpty } from "../../../Utils/isObjEmpty";
import { BoxHeader, BoxParag } from "../style";
import { getMostFrequentOffsetUuid, getProjectByUuid } from "../../../Utils/getFavoriteProject";

const FavProjects = ({userState, favoriteData, tableData }) => {
  const [mostCommonProject, setMostCommonProject] = useState({});

  useEffect(() => {
    if (favoriteData.length > 0 && tableData.length > 0) {
      const mostPopularID = getMostFrequentOffsetUuid(tableData);
      const mostPopularOffset = getProjectByUuid(mostPopularID, favoriteData);
      setMostCommonProject({ ...mostPopularOffset });
    }
  }, [favoriteData, tableData]);

  return (
    <>
      <BoxSize
        flexSize="1 0 49%"
        shadow={true}
        style={{ marginInlineStart: ".5rem" }}
      >
        <BoxHeader>Most common project</BoxHeader>
        <hr />
        <LittleBreakLine />
        <BoxParag color="black">
          The following project has been popular among your customers
        </BoxParag>
        <BreakLine />
        {!isObjEmpty(mostCommonProject) ? (
          <OffsetCard
            type="favOffset"
            item={{
              ...mostCommonProject,
            }}
            headerImage={mostCommonProject.offfset_thumbnail}
            isFav={true}
            userState={userState}
            justDisplay={true}
            mostCommonProject={mostCommonProject}
          />
        ) : (
          <Parag color="black">There is no popular project yet</Parag>
        )}
      </BoxSize>
    </>
  );
};

export default React.memo(FavProjects);
