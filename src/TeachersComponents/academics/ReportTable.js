import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    width: "100%",
  },
});

function SbaTable({ rows, classID, course }) {
  const classes = useStyles();

  const getTotal = (exams, work) => {
    return exams + work;
  };

  return (
    <div className="content__container">
      <TableContainer className="mb-5" component={Paper}>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell style={{ width: 160 }} align="left">
                Name of Student
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                ClassWork
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                Exam
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                Final Course
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                Position
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row) => (
              <TableRow
                align="left"
                key={row?._id}
                className="table-borderless"
              >
                <TableCell style={{ width: 160 }}>{row?.name}</TableCell>
                <TableCell style={{ width: 160 }}>{row?.classWork}</TableCell>
                <TableCell style={{ width: 160 }}>{row?.exam || "-"}</TableCell>
                <TableCell style={{ width: 160 }}>
                  {getTotal(row?.exam, row?.classWork)}
                </TableCell>
                <TableCell style={{ width: 160 }}>{row?.position}</TableCell>
              </TableRow>
            ))}
            {rows.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-danger">
                  No data yet
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default SbaTable;
