import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      fontWeight: 'bold',
    },
    listItem: {
      listStyle: 'none',
      marginTop: '20px',
      fontStyle: 'italic',
      paddingLeft: 0,
    },
    projectsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      textAlign: 'left',
      [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '1fr',
        textAlign: 'center',
      },
    },
    projectsList: {
      paddingLeft: 0,
    },
  })
);

export const TechnicalWriting = () => {
  const classes = useStyles();

  return (
    <div>
      <Box m={3} textAlign="center">
        <Typography variant="h4" className={classes.title}>
          technical writing projects
        </Typography>
      </Box>
      <Box m={3}>
        <Typography>
          I have a diverse selection of technical writing projects in my portfolio. I’ve worked on
          and published many types of technical documents, including install guides, user guides,
          configuration guides, release notes, online help, reference material, and hardware. The
          following samples are from several projects I worked on.
        </Typography>
        <Box className={classes.projectsContainer}>
          <Box mt={5}>
            <Typography variant="h6">
              <b>Hardware</b>
            </Typography>
            <ul className={classes.projectsList}>
              <li className={classes.listItem}>
                <a href="/technical-writing/M971932A001A_view.pdf" target="_blank">
                  MyCareLink Relay Home Communicator Quick Start Guide
                </a>
              </li>
              <li className={classes.listItem}>
                <a href="/technical-writing/M971931A001B_view.pdf" target="_blank">
                  MyCareLink Relay Home Communicator Patient Manual
                </a>
              </li>
            </ul>
          </Box>
          <Box mt={5}>
            <Typography variant="h6">
              <b>Installation</b>
            </Typography>
            <ul className={classes.projectsList}>
              <li className={classes.listItem}>
                <a href="/technical-writing/paceart_optima_install_manual.pdf" target="_blank">
                  Paceart Optima System Software Installation and Configuration Instructions
                </a>
              </li>
              <li className={classes.listItem}>
                <a href="/technical-writing/inggt_12212.pdf" target="_blank">
                  Installing Oracle GoldenGate Studio
                </a>
              </li>
              <li className={classes.listItem}>
                <a href="/technical-writing/inoam_11123.pdf" target="_blank">
                  Installation Guide for Oracle Identity and Access Management
                </a>
              </li>
              <li className={classes.listItem}>
                <a href="/technical-writing/asins_12212.pdf" target="_blank">
                  Planning an Installation of Oracle Fusion Middleware
                </a>
              </li>
              <li className={classes.listItem}>
                <a
                  href="/technical-writing/carelink_integration_software_install.pdf"
                  target="_blank"
                >
                  Mainspring Data Express CareLink Integration Software Installation and
                  Configuration Manual
                </a>
              </li>
            </ul>
          </Box>
          <Box mt={5}>
            <Typography variant="h6">
              <b>User And Reference Material</b>
            </Typography>
            <ul className={classes.projectsList}>
              <li className={classes.listItem}>
                <a href="/technical-writing/paceart_optima_user_manual.pdf" target="_blank">
                  Paceart Optima System Software User Manual
                </a>
              </li>
              <li className={classes.listItem}>
                <a href="/technical-writing/rcuug_12212.pdf" target="_blank">
                  Creating Schemas with the Repository Creation Utility
                </a>
              </li>
              <li className={classes.listItem}>
                <a href="/technical-writing/opatc_12212.pdf" target="_blank">
                  Patching with OPatch
                </a>
              </li>
              <li className={classes.listItem}>
                <a href="/technical-writing/ouirf_12212.pdf" target="_blank">
                  Installing Software with the Oracle Universal Installer
                </a>
              </li>
              <li className={classes.listItem}>
                <a href="/technical-writing/idmck_11123.pdf" target="_blank">
                  Verifying Your Oracle Identity and Access Management Environment
                </a>
              </li>
            </ul>
          </Box>
          <Box mt={5}>
            <Typography variant="h6">
              <b>Configuration/Administration</b>
            </Typography>
            <ul className={classes.projectsList}>
              <li className={classes.listItem}>
                <a href="/technical-writing/lcmcg_12212.pdf" target="_blank">
                  Configuring Oracle Fusion Middleware Using the Lifecycle Management Tools
                </a>
              </li>
              <li className={classes.listItem}>
                <a
                  href="/technical-writing/mainspring_data_express_connectivity_guide.pdf"
                  target="_blank"
                >
                  Mainspring Data Express Connectivity Guide
                </a>
              </li>
            </ul>
          </Box>
          <Box mt={5}>
            <Typography variant="h6">
              <b>Online Help</b>
            </Typography>
            <ul className={classes.projectsList}>
              <li className={classes.listItem}>
                <a href="/technical-writing/lcmhp_12212.pdf" target="_blank">
                  FMW Composer Online Help
                </a>
              </li>
              <li className={classes.listItem}>
                <a href="/technical-writing/M988746A001A_view.pdf" target="_blank">
                  CareLink Express Online Help
                </a>
              </li>
              <li className={classes.listItem}>
                <a href="/technical-writing/M980686A001A_view.pdf" target="_blank">
                  Reveal LINQ Mobile Manager Online Help
                </a>
              </li>
            </ul>
          </Box>
          <Box mt={5}>
            <Typography variant="h6">
              <b>Release Notes</b>
            </Typography>
            <ul className={classes.projectsList}>
              <li className={classes.listItem}>
                <a href="/technical-writing/rninf_12212.pdf" target="_blank">
                  Release Notes for Oracle Fusion Middleware Infrastructure
                </a>
              </li>
              <li className={classes.listItem}>
                <a href="/technical-writing/m978456a001a_view.pdf" target="_blank">
                  Software Errata Sheet for the MSW001 Reveal LINQ Mobile Manager Application
                </a>
              </li>
              <li className={classes.listItem}>
                <a href="/technical-writing/m978458a001a_view.pdf" target="_blank">
                  Software Errata Sheet for the MSW002 Reveal LINQ Mobile Manager Application
                </a>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
