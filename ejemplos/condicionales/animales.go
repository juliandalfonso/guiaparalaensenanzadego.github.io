package main

import "fmt"

func main() {
    var animal string
    fmt.Println("Elige felino, reptil,pez")
    fmt.Scanln(&animal)
    if animal == "felino" {
        fmt.Println("El animal es un felino")
    } else if animal == "reptil" {
        fmt.Println("El animal es un reptil")
    } else if animal == "pez" {
        fmt.Println("El animal es un pez")
    } else {
        fmt.Println("El animal es de otra categoria")
    }
}
