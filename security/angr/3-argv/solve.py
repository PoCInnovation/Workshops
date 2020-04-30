import angr
import sys
import claripy

BYTE=8

def main():
    project = angr.Project("./3-argv/chall")
    argv = [project.filename, claripy.BVS("input", 20*BYTE)]
    initial_state = project.factory.entry_state(args=argv)
    simulation = project.factory.simgr(initial_state)
    good_addr = 0x00000000004011fb
    simulation.explore(find=good_addr)
    if simulation.found:
        solution_state = simulation.found[0]
        print(solution_state.solver.eval(argv[1], cast_to=bytes).decode())
    else:
        print("No solution u noob")
        exit(1)

if __name__ == "__main__":
    main()
