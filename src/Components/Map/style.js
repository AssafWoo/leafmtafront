import { MapContainer } from "react-leaflet";
import styled from "styled-components";

export const MapWrapper = styled.div`
	width: 100%;
	margin: auto;
`;

export const StyledMapContainer = styled(MapContainer)`
	/* box-shadow: 0px 0px 30px rgb(0 0 0 / 20%); */
	width: 100%;
	height: 25rem;
	z-index: 0;
	border-radius: 15px;
`;
