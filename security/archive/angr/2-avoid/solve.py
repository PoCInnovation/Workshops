import angr
import sys

def main():
    project = angr.Project("./2-avoid/chall")
    initial_state = project.factory.entry_state()
    simulation = project.factory.simgr(initial_state)
    good_addr = 0x080485e5
    bad_addr = [0x080485a8]
    simulation.explore(find=good_addr, avoid=bad_addr)
    if simulation.found:
        solution_state = simulation.found[0]
        print(solution_state.posix.dumps(sys.stdin.fileno()).decode())
    else:
        print("No solution u noob")
        exit(1)

if __name__ == "__main__":
    main()
