/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useRef, useState } from "react";
import { Heading } from "@chakra-ui/layout";
import {
  Flex,
  BoxSize,
  BreakLine,
  Parag,
  LittleBreakLine,
} from "../../Styles/styles";
import { DarkerTheme, MainGreen } from "../../Styles/colors";
import { useGetTime } from "../../Utils/useGetTime";
import { useScreenSize } from "../../Utils/useScreenSize";
import { Spinner } from "@chakra-ui/react";
import MapComponent from "../../Components/Map/map";
import FavProjects from "./favProjects/fav-projects";
import HeaderSection from "./headerSection/header-section";
import { BoxHeader, BoxParag } from "./style";
import EmployeesOffset from "./employeesOffset/employeesOffset";
import Blog from "./blog/blog";
import Calculators from "./calculators/Calculators";


const DashboardContent = ({
  user,
  handleToggleFilter,
  chartData,
  tableData,
  favoriteData,
  reFetchTable
}) => {

  const CurrentTime = useGetTime();

  return (
    <>
      <BoxSize flexSize="5" isInvisible={true} style={{ paddingTop: "0" }}>
        <Flex>
          <BoxSize flexSize="3" isInvisible={true}>
            <Heading
              fontSize="2rem"
              mb="2"
              textAlign="left"
              color={DarkerTheme}
            >
              Howdy {user.userName}, {CurrentTime}
            </Heading>
            <Parag color="black">You're making a difference!</Parag>
          </BoxSize>
        </Flex>
        <HeaderSection favoriteData={favoriteData} user={user} />
        <LittleBreakLine />

        <Flex>
          <Calculators />
          <FavProjects
            favoriteData={favoriteData}
            tableData={tableData}
            userState={user}
            reFetchTable={reFetchTable}
          />
        </Flex>
        <LittleBreakLine />
        <Flex>
          <BoxSize shadow={true} isInvisible={false} flexSize="2 0 49%">
            <BoxHeader>Your projects worldwide locations</BoxHeader>
            <hr />
            <LittleBreakLine />
            <BoxParag color="black">
              Explore where your projects are located worldwide
            </BoxParag>
            <BreakLine />
            {favoriteData.length > 0 ? (
              <MapComponent offsets={favoriteData} />
            ) : (
              <Spinner color={MainGreen} />
            )}
          </BoxSize>
          <EmployeesOffset user={user} />
        </Flex>
        <LittleBreakLine />
        <Flex>
          <Blog />
        </Flex>
      </BoxSize>
    </>
  );
};

export default React.memo(DashboardContent);
